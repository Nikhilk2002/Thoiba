require('dotenv').config();
const mongoose = require('mongoose');

module.exports = {
  dbConnect: async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/Thoiba", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Database connected successfully");
    } catch (err) {
      console.error("Database connection error:", err.message);
    }
  },
};
