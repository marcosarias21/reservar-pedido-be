require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  const DB = process.env.DB;
  try {
    await mongoose.connect(DB)
    console.log('DB conectada exitosamente')
  } catch (error) {
    console.log(error)
  }
}
mongoose.set('strictQuery', true);

connectDB();