const express = require('express');
const { getProfile, createOrUpdateProfile } = require('../controllers/profileController'); // Changement ici
const authMiddleware = require('../middlewares/authMiddleware');
const { param, body, validationResult } = require('express-validator');

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
 * Obtenir un profil par ID (authentification requise)
 */
router.get(
    '/:id',
    [
        authMiddleware,
        param('id').isInt().withMessage('L’ID du profil doit être un entier.'),
    ],
    validateRequest,
    getProfile
);

/**
 * Créer ou mettre à jour un profil (authentification requise)
 */
router.put(
    '/:id',
    [
        authMiddleware,
        param('id').isInt().withMessage('L’ID du profil doit être un entier.'),
        body('bio').optional().isString().withMessage('La bio doit être une chaîne de caractères.'),
        body('age').optional().isInt().withMessage('L’âge doit être un entier.'),
        body('location')
            .optional()
            .isString()
            .withMessage('La localisation doit être une chaîne de caractères.'),
    ],
    validateRequest,
    createOrUpdateProfile // Utilisation de `createOrUpdateProfile` ici
);

module.exports = router;
