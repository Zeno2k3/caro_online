'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chat_messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      chat_messages.belongsTo(models.games, {
        foreignKey: 'game_id',
      });
      chat_messages.belongsTo(models.user, {
        foreignKey: 'user_id',
      });
    }
  }
  chat_messages.init({
    game_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    message: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'chat_messages',
    tableName: 'chat_messages',
    underscored: true,
    timestamps: false,
  });
  return chat_messages;
};