'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cinema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
    static associate({cineplex}) {
      // define association here
      this.belongsTo(cineplex)
    }
  };
  cinema.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    address: DataTypes.STRING,
    cineplexId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cinema',
  });
  return cinema;
};