const express = require('express');
const router = express.Router();

const { createUser, addProductUser, getUsers } = require('../controller/users');

router
.post('', createUser)
.put('', addProductUser)
.get('', getUsers)
module.exports = router;