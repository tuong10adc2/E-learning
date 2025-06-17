import mongoose from "mongoose";
import dotenv from "./dotenv";
import logger from "./logger";

dotenv.config();

const { MONGO_URI } = process.env;

const connectDatabase = async (callback?: () => void) => {
  try {
    if (!MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env file!");
    }
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // dbName: "my_db" // Nếu connection string đã có /my_db thì k cần d này!
    } as any);

    logger.info("MongoDB connected", {
      url: MONGO_URI,
    });

    if (callback) callback();
  } catch (err) {
    logger.error("MongoDB initial connection error: ", err);
    process.exit(1); // Thoát chương trình nếu connect lỗi
  }

  mongoose.connection.on("error", (err) => {
    logger.error("MongoDB runtime error: ", err);
  });
};

export default connectDatabase;
