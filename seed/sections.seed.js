import { connectMongoDb } from "#config/db.js";
import { SectionModel } from "#modules/section/section.model.js";

const sections = [
  {
    name: "Men",
    slug: "men",
    description: "Clothing and accessories for men",
    imageUrl: "https://example.com/images/men.jpg",
    sortOrder: 1,
  },
  {
    name: "Women",
    slug: "women",
    description: "Clothing and accessories for women",
    imageUrl: "https://example.com/images/women.jpg",
    sortOrder: 2,
  },
  {
    name: "Kids",
    slug: "kids",
    description: "Clothing and accessories for kids",
    imageUrl: "https://example.com/images/kids.jpg",
    sortOrder: 3,
  },
];

const seedSectionData = async () => {
  // connect to db
  await connectMongoDb("mongodb://localhost:27017/");

  // delete existing data
  await SectionModel.find().deleteMany();
  console.log("deleted old data");

  // insert the data
  await SectionModel.insertMany(sections);
  console.log("seeding done!!");
};

seedSectionData()
  .then(() => console.log("success"))
  .catch((err) => console.log("err while inserting data...", err));
