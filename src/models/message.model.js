const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Message = sequelize.define('Message', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    content: DataTypes.TEXT,
    senderId: DataTypes.UUID,
    receiverId: DataTypes.UUID,
    read: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Message;
};