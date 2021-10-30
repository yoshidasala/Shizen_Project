const { db } = require("../server/db");
const Waters = require("../server/db/models/waters");

const { green, red } = require("chalk");

const waters = [
  {
    name: "Green Moon",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Waters.create(waters[0]);

    console.log(green("Seeding success!"));
    db.close();
  } catch (err) {
    console.error(red("Oh noes! Something went wrong!"));
    console.error(err);
    db.close();
  }
};
module.exports = seed;

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
