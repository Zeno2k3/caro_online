'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      games.belongsTo(models.user, {
        foreignKey: 'player_id',
      });
      games.hasMany(models.moves, {
        foreignKey: 'game_id',
      });
      games.hasMany(models.chat_messages, {
        foreignKey: 'game_id',
      });
      games.hasMany(models.game_views, {
        foreignKey: 'game_id',
      })
    }
  }
  games.init({
    player_id: DataTypes.INTEGER,
    winner_id: DataTypes.INTEGER,
    role: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'games',
    tableName: 'games',
    underscored: true,
    timestamps: false,
  });
  return games;
};