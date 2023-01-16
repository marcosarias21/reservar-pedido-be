const { Schema, model } = require('mongoose');

const user = new Schema({
  nombre: String,
  apellido: String,
  email: String,
  password: String,
  empresa: String,
  pedidos: [{
    type:Schema.Types.Object,
    pedido: String,
    time: String,
   }],
})

module.exports = model('User', user)