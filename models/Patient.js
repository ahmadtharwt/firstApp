const Sequelize = require('sequelize');
const db = require('../db');

const Patient = db.define('patient', {
    MRN: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    Name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    Gender:{
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    DOB: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    fileCreatDt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  //timestamps
    //createdat:Sequelize.DATE,
    //updatedat:Sequelize.DATE,
    
  });

module.exports = Patient;