const { Report, User } = require('../models');

exports.createReport = async (req, res) => {
  try {
    const report = await Report.create({
      reporterId: req.user.id,
      reportedUserId: req.body.reportedUserId,
      reason: req.body.reason,
      description: req.body.description
    });
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getReports = async (req, res) => {
  try {
    const reports = await Report.findAll({
      include: [
        { model: User, as: 'reporter', attributes: { exclude: ['password'] } },
        { model: User, as: 'reportedUser', attributes: { exclude: ['password'] } }
      ],
      order: [['createdAt', 'DESC']]
    });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateReportStatus = async (req, res) => {
  try {
    const report = await Report.findByPk(req.params.id);
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }
    await report.update({ status: req.body.status });
    res.json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};