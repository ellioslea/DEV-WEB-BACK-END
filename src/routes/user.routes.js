const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { authenticateToken } = require('../middleware/auth.middleware');

router.get('/', authenticateToken, userController.getPotentialMatches);
router.get('/:id', authenticateToken, userController.getUserProfile);
router.put('/:id', authenticateToken, userController.updateProfile);
router.delete('/:id', authenticateToken, userController.deleteAccount);

module.exports = router;