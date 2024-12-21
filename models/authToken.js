const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const AuthToken = sequelize.define('AuthToken', {
    token: { type: DataTypes.TEXT, allowNull: false }
}, {
    timestamps: true,
});

// Associer AuthToken à User
AuthToken.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(AuthToken, { foreignKey: 'user_id' });

module.exports = AuthToken;
