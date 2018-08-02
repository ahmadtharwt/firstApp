const Sequelize = require('sequelize');
const db = require('../db');

const Visit = db.define('visit', {
    visit_no: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    patientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    visit_type:{
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    admission_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    discharge_date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    LOS: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    doctor_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
  //timestamps
    //createdat:Sequelize.DATE,
    //updatedat:Sequelize.DATE,
    
  });

module.exports = Visit;