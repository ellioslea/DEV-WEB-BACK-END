const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Profile = sequelize.define('Profile', {
    bio: { type: DataTypes.TEXT },
    age: { type: DataTypes.INTEGER },
    location: { type: DataTypes.STRING }
});

module.exports = Profile;
