const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Profile extends Model {}

Profile.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'Profile',
  }
);

module.exports = Profile;
