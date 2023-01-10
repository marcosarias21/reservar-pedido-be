const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/be-reserva-pedido')
    console.log('DB conectada exitosamente')
  } catch (error) {
    console.log(error)
  }
}
mongoose.set('strictQuery', true);

connectDB();