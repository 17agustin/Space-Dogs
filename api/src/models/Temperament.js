const { Sequelize, DataTypes } = require('sequelize'); 

module.exports = (sequelize) => {
 sequelize.define('temperament', {
    name:{
      type: DataTypes.STRING,
      allowNull: true,
    },
  },{timestamps:false});} 