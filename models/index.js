const sequelize = require('../config/database');
const User = require('./user');
const Profile = require('./profile');
const Message = require('./message');

// Relations entre modèles
User.hasOne(Profile);
Profile.belongsTo(User);

User.hasMany(Message);
Message.belongsTo(User);

sequelize.sync();

module.exports = { sequelize, User, Profile, Message };
