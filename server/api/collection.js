const router = require("express").Router();

const Sequelize = require("sequelize");
const Collection = require("../db/models/collection");

// // matches GET requests to /api/waters/
router.get("/", async (req, res, next) => {
  try {
    const collect = await Collection.findAll();
    res.json(collect);
  } catch (error) {
    next(error);
  }
});
// // matches POST requests to /api/waters/
// router.post('/', function (req, res, next) { /* etc */});
// // matches PUT requests to /api/waters/:waterId
// router.put('/:waterId', function (req, res, next) { /* etc */});
// // matches DELETE requests to /api/waters/:waterId
// router.delete('/:waterId', function (req, res, next) { /* etc */});

module.exports = router;
