const sequelize = require('../config/database');
const UserModel = require('./user.model');
const MatchModel = require('./match.model');
const MessageModel = require('./message.model');
const ReportModel = require('./report.model');

const User = UserModel(sequelize);
const Match = MatchModel(sequelize);
const Message = MessageModel(sequelize);
const Report = ReportModel(sequelize);

// Relations simples
Match.belongsTo(User, { as: 'initiator', foreignKey: 'initiatorId' });
Match.belongsTo(User, { as: 'receiver', foreignKey: 'receiverId' });

Message.belongsTo(User, { as: 'sender', foreignKey: 'senderId' });
Message.belongsTo(User, { as: 'receiver', foreignKey: 'receiverId' });

Report.belongsTo(User, { as: 'reporter', foreignKey: 'reporterId' });
Report.belongsTo(User, { as: 'reportedUser', foreignKey: 'reportedUserId' });

module.exports = {
  sequelize,
  User,
  Match,
  Message,
  Report
};