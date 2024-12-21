const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Profile = sequelize.define('Profile', {
    bio: { type: DataTypes.TEXT },
    age: { type: DataTypes.INTEGER },
    location: { type: DataTypes.STRING }
}, {
    timestamps: true,
});

// Associer Profile à User
Profile.belongsTo(User, { foreignKey: 'user_id' });
User.hasOne(Profile, { foreignKey: 'user_id' });

module.exports = Profile;
