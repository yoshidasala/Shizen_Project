const Sequelize = require("sequelize");

const db = require("../database");

const Collection = db.define("collection", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Collection;
