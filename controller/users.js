const User = require('../models/users');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  const { email, password, nombre, apellido, empresa  } = req.body
  const passwordEncrypted = bcrypt.hashSync(password, 10);
  try {
    const newUser = new User({
      email,
      password: passwordEncrypted,
      nombre,
      empresa,
      apellido,
    })

    const emailFind = await User.findOne({ email: req.body.email }) 
    if (emailFind) {
      res.status(401).json({
        message: 'El email ya ha sido utilizado'
      })      
    } else{ 
      await newUser.save();
      res.status(200).json({
        message: 'Usuario creado exitosamente',
        newUser,
      })
    }

  } catch (error) {
    res.status(404).json({
    error
  })
  }
  console.log(email, password, nombre, apellido)
}

const addProductUser = async (req, res) => {
  const { id, nombre } = req.body;
  const userEdited = await User.findByIdAndUpdate(id, {
    $addToSet: {
      pedidos: {
        pedido: nombre
      },
    },
  })
  try {
    res.json({
      userEdited
    })
  } catch (error) {
    
  }
}

module.exports = { createUser, addProductUser } 