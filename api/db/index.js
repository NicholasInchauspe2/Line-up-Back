require("dotenv").config();
const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://NicholasInchauspe:Testing@back-line-up.2mvgccm.mongodb.net/test`,
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
