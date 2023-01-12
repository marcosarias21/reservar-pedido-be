require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('../models/users');
const jwt = require('jsonwebtoken');

const SecretKey = process.env.SECRETKEY;

const login = async (req, res) => {
   const { email, password } = req.body;
   const user = await User.findOne({ email });
  
    if(!user) {
      return res.status(404).json({
        message: 'Usuario inexistente'
      })
    }
    const match = bcrypt.compareSync(password, user.password);
    const token = jwt.sign({ user }, SecretKey, {expiresIn: '1h'});
   
   if (match) {
    return res.status(200).json({
      message: 'Logueado existosamente',
      user,
      token
    }),
    user
   } else {
    return res.status(404).json({
      message: 'Usuario o cotrasena invalido',
    });
   }
}

module.exports = { login };