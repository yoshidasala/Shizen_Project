const db = require("./database");
const Waters = require("./models/waters");
const Collection = require("./models/collection");
const Mountains = require("./models/mountains");

Collection.hasMany(Waters);
Waters.belongsTo(Collection);

Collection.hasMany(Mountains);
Mountains.belongsTo(Collection);

module.exports = {
  // Include your models in this exports object as well!
  db,
  Waters,
  Collection,
  Mountains,
};
