const User = require('../models/users');

const createUser = async (req, res) => {
  const { email, password, nombre, apellido  } = req.body

  try {
    const newUser = new User({
      email,
      password,
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