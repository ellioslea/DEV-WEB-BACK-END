const express = require('express');
const router = express.Router();
const matchController = require('../controllers/match.controller');
const { authenticateToken } = require('../middleware/auth.middleware');

router.post('/', authenticateToken, matchController.createMatch);
router.put('/:id', authenticateToken, matchController.updateMatchStatus);
router.get('/', authenticateToken, matchController.getUserMatches);
router.delete('/:id', authenticateToken, matchController.unmatch);

module.exports = router;