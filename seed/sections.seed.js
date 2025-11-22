import { connectMongoDb } from "#config/db.js";
import { SectionModel } from "#modules/section/section.model.js";

const seedSectionData = async () => {
  await connectMongoDb(
    "mongodb://localhost:27017/"
  );
  await SectionModel.create({
    name: "Mens",
    slug: "mens",
    isActive: false
  });
};

seedSectionData()
  .then(() => console.log("data successfully... uploaded"))
  .catch((err) => console.log("err while inserting data...", err));
