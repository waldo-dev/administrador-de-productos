const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DBConnect, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexion con la base de datos establecida");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
