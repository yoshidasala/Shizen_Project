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

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://images.unsplash.com/photo-1635598785659-60ddfb58696b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
  },
});

module.exports = Waters;
