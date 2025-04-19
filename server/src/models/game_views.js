'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game_views extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      game_views.belongsTo(models.games, {
        foreignKey: 'game_id',
      });
      game_views.belongsTo(models.user, {
        
        foreignKey: 'user_id',
      });
    }
  }
  game_views.init({
    game_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'game_views',
    tableName: 'game_views',
    underscored: true,
    timestamps: false,
  });
  return game_views;
};