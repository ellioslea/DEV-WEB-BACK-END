const express = require('express');
const likeController = require('../controllers/likeController');
const router = express.Router();

// Route pour obtenir tous les likes
router.get('/likes', likeController.getLikes);

// Route pour créer un like
router.post('/likes', likeController.createLike);

module.exports = router;
