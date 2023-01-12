const { Schema, model } = require('mongoose');

const menu = new Schema({
  nombre: String,
  imagen: String,
});

module.exports = model('Menu', menu);