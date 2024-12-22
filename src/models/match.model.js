const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Match = sequelize.define('Match', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending'
    },
    initiatorId: DataTypes.UUID,
    receiverId: DataTypes.UUID
  });

  return Match;
};