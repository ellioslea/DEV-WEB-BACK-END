const sequelize = require('../config/database');
const User = require('./user');
const Profile = require('./profile');
const Message = require('./message');

User.hasOne(Profile, { onDelete: 'CASCADE' });
Profile.belongsTo(User);

User.hasMany(Message);
Message.belongsTo(User);

sequelize.sync();

module.exports = { User, Profile, Message };
