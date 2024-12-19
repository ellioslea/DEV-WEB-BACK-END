const express = require('express');
const { createOrUpdateProfile } = require('../controllers/profileController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/:userId', authMiddleware, createOrUpdateProfile);

module.exports = router;
