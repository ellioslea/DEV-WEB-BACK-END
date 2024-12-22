const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Publisher = sequelize.define('Publisher', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING
    },
    foundedYear: {
      type: DataTypes.INTEGER
    }
  });

  return Publisher;
};