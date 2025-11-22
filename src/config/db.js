import mongoose from "mongoose";

export const connectMongoDb = async (uri) => {
  try {
    mongoose.connect(uri, {
      dbName: "ecommerce",
    });

    console.log("mongodb connected successfully!!");
  } catch (error) {
    console.log("error while connecting mongodb");
    return {
      errorMsg: error,
    };
  }
};
