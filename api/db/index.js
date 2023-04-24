require("dotenv").config();
const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.5nlimpd.mongodb.net/test`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("DB Online");
  } catch (error) {
    throw new Error("Error a la hora de inicializar DB");
  }
};

module.exports = dbConnection;
