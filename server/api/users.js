const router = require("express").Router();

const Sequelize = require("sequelize");
const User = require("../db/models/users");

// // matches GET requests to /api/collection/
router.get("/", async (req, res, next) => {
  try {
    const collect = await User.findAll();
    res.json(collect);
  } catch (error) {
    next(error);
  }
});
///api/collection/login
router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

///api/collection/signup
router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.send({token: await user.generateToken()})
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

// router.post('/', function (req, res, next) { /* etc */});
// // matches PUT requests to /api/waters/:waterId
// router.put('/:waterId', function (req, res, next) { /* etc */});
// // matches DELETE requests to /api/waters/:waterId
// router.delete('/:waterId', function (req, res, next) { /* etc */});

module.exports = router;
