'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class moves extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      moves.belongsTo(models.games, {
        foreignKey: 'game_id',
      });
      moves.belongsTo(models.user, {
        foreignKey: 'player_id',
      });
    }
  }
  moves.init({
    game_id: DataTypes.INTEGER,
    player_id: DataTypes.INTEGER,
    move_x: DataTypes.INTEGER,
    move_y: DataTypes.INTEGER,
    move_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'moves',
    tableName: 'moves',
    underscored: true,
    timestamps: false,
  });
  return moves;
};