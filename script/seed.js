const { db } = require("../server/db");
const Waters = require("../server/db/models/waters");

const { green, red } = require("chalk");

const waters = [
  {
    name: "Sendai",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    imageUrl:
      "https://images.unsplash.com/photo-1615839377917-bc950e77a6d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1126&q=80",
  },
  {
    name: "Kawarahashi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    imageUrl:
      "https://images.unsplash.com/photo-1614281195492-55ac268424d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=679&q=80",
  },
  {
    name: "Sonomama",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    imageUrl:
      "https://images.unsplash.com/photo-1598751654513-bd903cff4b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
