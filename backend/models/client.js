'use strict';
const Sequelize = require('sequelize');
 
module.exports = (sequelize) => {
  class Client extends Sequelize.Model {    
  }
  Client.init({
    name: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: {
          msg: '"Name" is required'
        },
      }
    },
    namePet: Sequelize.STRING,
    email: Sequelize.STRING,
    phone: Sequelize.STRING,
    message: Sequelize.STRING,
    contactWay: Sequelize.STRING,
    period: Sequelize.STRING,
    receiveNotifications : Sequelize.BOOLEAN 
  }, { sequelize });

  return Client;
};