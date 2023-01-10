const User = require('../models/users');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  const { email, password, nombre, apellido  } = req.body
  const passwordEncrypted = bcrypt.hashSync(password, 10);
  try {
    const newUser = new User({
      email,
      password: passwordEncrypted,
      nombre,
      apellido,
    })

    await newUser.save();

    res.json({
      message: 'Usuario creado exitosamente'
    })
  } catch (error) {
    res.json({
    error
  })
  }
  console.log(email, password, nombre, apellido)
}

module.exports = { createUser } 