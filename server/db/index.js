const db = require("./database");
const Waters = require("./models/waters");
const User = require("./models/users");
const Mountains = require("./models/mountains");

User.hasMany(Waters);
Waters.belongsTo(User);

User.hasMany(Mountains);
Mountains.belongsTo(User);

module.exports = {
  // Include your models in this exports object as well!
  db,
  Waters,
  User,
  Mountains,
};
