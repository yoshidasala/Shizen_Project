const Sequelize = require("sequelize");

const db = require("../database");

const Waters = db.define("waters", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },

  imageURL: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
});

module.exports = Waters;
