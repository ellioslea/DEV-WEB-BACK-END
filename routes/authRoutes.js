// authRoutes.js

const express = require('express');
const { login, register } = require('../controllers/authController');
const { body, validationResult } = require('express-validator');

const router = express.Router();

// Middleware pour gérer les erreurs de validation
const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// Route pour se connecter
router.post(
    '/login',
    [
        body('username').notEmpty().withMessage('Le nom d’utilisateur est requis.'),
        body('password').notEmpty().withMessage('Le mot de passe est requis.'),
    ],
    validateRequest,
    login
);

// Route pour s'enregistrer
router.post(
    '/register',
    [
        body('username')
            .isLength({ min: 3 })
            .withMessage('Le nom d’utilisateur doit contenir au moins 3 caractères.'),
        body('password')
            .isLength({ min: 6 })
            .withMessage('Le mot de passe doit contenir au moins 6 caractères.'),
    ],
    validateRequest,
    register
);

module.exports = router;
