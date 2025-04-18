'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      user.hasMany(models.games, {
        foreignKey: 'player_id',
      });
      user.hasMany(models.moves, {
        foreignKey: 'player_id',
      });
      user.hasMany(models.chat_messages, {
        foreignKey: 'player_id',
      });
      user.hasMany(models.game_viewers, {
        foreignKey: 'player_id',
      });
      // Một người chơi có thể chơi nhiều ván game với 2 vai trò khác nhau
    }
  }
  user.init({
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};