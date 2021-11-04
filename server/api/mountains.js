const router = require("express").Router();

const Sequelize = require("sequelize");
const { Mountains } = require("../db");

// // matches GET requests to /api/mountains/
router.get("/", async (req, res, next) => {
  try {
    const mount = await Mountains.findAll();
    res.json(mount);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
