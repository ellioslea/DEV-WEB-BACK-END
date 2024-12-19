const express = require('express');
const { createUser } = require('../controllers/userController');
const { deleteInactiveUsers } = require('../controllers/userController');

const router = express.Router();

router.post('/create', createUser);
router.delete('/inactive', deleteInactiveUsers);

module.exports = router;
