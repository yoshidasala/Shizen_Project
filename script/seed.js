const { db, User } = require("../server/db");
const Waters = require("../server/db/models/waters");

const Mountains = require("../server/db/models/mountains");
const { green, red } = require("chalk");

const waters = [
  {
    name: "Sendai",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    imageUrl:
      "https://images.pexels.com/photos/5500780/pexels-photo-5500780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Yamanashi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    imageUrl:
      "https://images.pexels.com/photos/5768842/pexels-photo-5768842.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },

  {
    name: "Shizuoka",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    imageUrl:
      "https://images.pexels.com/photos/7982398/pexels-photo-7982398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Nikko",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    imageUrl:
      "https://images.pexels.com/photos/5768842/pexels-photo-5768842.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
];

const mountains = [
  {
    name: "Aoyama",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    imageUrl:
      "https://images.pexels.com/photos/7126572/pexels-photo-7126572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    level: 4,
    collectionid: 1,
  },
  {
    name: "Hakone",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    imageUrl:
      "https://images.pexels.com/photos/6827261/pexels-photo-6827261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    level: 2,
    collectionid: 4,
  },
  {
    name: "Izu",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    imageUrl:
      "https://images.pexels.com/photos/5236400/pexels-photo-5236400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    level: 1,
    collectionid: 2,
  },
];
const users = [
  {
    username: "Grey",
    password: "hello123",
  },
  {
    username: "Sam",
    password: "goodbye123",
  },
  {
    username:"Cody",
    password: "computer123",
  },
];
const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      waters.map((water) => {
        return Waters.create(water);
      })
    );

    await Promise.all(
      mountains.map((mount) => {
        return Mountains.create(mount);
      })
    );
    await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );

    db.close();
  } catch (err) {
    console.error(red("Oh noes! Something went wrong!"));
    console.error(err);
    db.close();
  }
};

if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}

module.exports = seed;
