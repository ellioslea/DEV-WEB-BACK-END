const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Message = sequelize.define('Message', {
    content: { type: DataTypes.TEXT, allowNull: false }
});

module.exports = Message;
