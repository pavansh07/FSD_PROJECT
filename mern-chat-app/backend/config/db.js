const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    console.log("Loading MongoDB URI...".green.bold);
    const uri = process.env.MONGO_URI;
    
    if (!uri) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }

    console.log(`Connecting to MongoDB with URI: ${uri}`.yellow.bold);

    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a failure code
  }
};

module.exports = connectDB;
