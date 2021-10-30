const router = require("express").Router();
// const Water = require("../db/water");
const Sequelize = require("sequelize");
const { Waters } = require("../db/models/waters");

// // matches GET requests to /api/waters/
router.get("/", async (req, res, next) => {
  try {
    const waters = await Waters.findAll();
    res.json(waters);
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
