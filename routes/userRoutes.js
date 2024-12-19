const express = require('express');
const { getUsers, getUserById, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const { param, validationResult } = require('express-validator');

const router = express.Router();

/**
 * Middleware pour gérer les erreurs de validation
 */
const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

/**
 * Obtenir tous les utilisateurs (admin uniquement)
 */
router.get(
    '/',
    [authMiddleware, roleMiddleware('admin')],
    getUsers // Cette fonction doit être définie et exportée correctement dans le contrôleur
);

/**
 * Obtenir un utilisateur par ID (authentification requise)
 */
router.get(
    '/:id',
    [
        authMiddleware,
        param('id')
            .isInt()
            .withMessage('L’ID de l’utilisateur doit être un entier.')
            .custom((value) => value > 0)
            .withMessage('L’ID de l’utilisateur doit être supérieur à zéro.'), // Vérification que l'ID est positif
    ],
    validateRequest,
    getUserById
);

/**
 * Supprimer un utilisateur (admin uniquement)
 */
router.delete(
    '/:id',
    [
        authMiddleware,
        roleMiddleware('admin'),
        param('id')
            .isInt()
            .withMessage('L’ID de l’utilisateur doit être un entier.')
            .custom((value) => value > 0)
            .withMessage('L’ID de l’utilisateur doit être supérieur à zéro.'), // Vérification que l'ID est positif
    ],
    validateRequest,
    deleteUser
);

module.exports = router;
