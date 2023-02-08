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
      rol: 'Cliente',
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
  const { email, nuevoPedido, hora } = req.body;
    await User.findOneAndUpdate({email}, {
      $push: {
        pedidos: { pedido: nuevoPedido, hora },
      },
    })    


  try {
    res.json({
      message: `Se agrego ${nuevoPedido} a tus pedidos`,
      nuevoPedido
    })
  } catch (error) {

  }
}

const getUsers = async (req, res) => {
  const users = await User.find({})
  try {
    res.json({
      users
    })
  } catch (error) {
    res.json({
      error
    })
  }
}

const getOrderClient = async (req, res) => {
  const { email } = req.params;
  const user = await User.findOne({ email })
  try {
    res.json({
      user,
    })
  } catch (error) {
    res.json({
      error
    })
  }
}

const searchUser = async (req, res) => {
  const { search } = req.params;
  const regex = new RegExp(search, 'i')
  const result = await User.find({
    "$expr": {
      "$regexMatch": {
        "input": { "$concat": ["$nombre", " ", "$apellido"] },
        "regex": search,
        "options": "i"
      }
    }
  }
 )
  try {
    res.json({
      result
    })
  } catch (error) {
    res.json({
      error
    })
  }
}

module.exports = { createUser, addProductUser, getUsers, getOrderClient, searchUser } 