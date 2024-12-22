const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Report = sequelize.define('Report', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    reason: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending'
    },
    reporterId: DataTypes.UUID,
    reportedUserId: DataTypes.UUID
  });

  return Report;
};