const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report.controller');
const { authenticateToken, isAdmin } = require('../middleware/auth.middleware');

router.post('/', authenticateToken, reportController.createReport);
router.get('/', authenticateToken, isAdmin, reportController.getReports);
router.put('/:id', authenticateToken, isAdmin, reportController.updateReportStatus);

module.exports = router;