const express = require('express');
const { getProfile } = require('../controllers/profileController');
const { authenticate } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/:userId', authenticate, getProfile);

module.exports = router;
