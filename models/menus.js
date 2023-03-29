const { Schema, model } = require('mongoose');

const menu = new Schema({
  nombre: String,
  imagen: String,
  empresa: String,
  type: String,
});

module.exports = model('Menu', menu);