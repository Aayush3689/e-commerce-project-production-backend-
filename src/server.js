import { createApp } from "./app.js";
import { connectMongoDb } from "#config/db.js";

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    const app = createApp();

    //  coonect to mongodb
    await connectMongoDb(process.env.MONGO_URI);

    app.listen(PORT, () => {
      console.log(`server is runnnig on the port: ${PORT}`);
    });
  } catch (error) {
    console.log("error in server.js start function...");
    return {
      errorMsg: error,
    };
  }
})();
