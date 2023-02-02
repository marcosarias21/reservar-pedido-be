const express = require('express');
const router = express.Router();

const { createUser, addProductUser, getUsers, searchUser, getOrderClient } = require('../controller/users');

router
.post('', createUser)
.put('', addProductUser)
.get('', getUsers)
.get('/:email',  getOrderClient)
.get('/:search', searchUser)
module.exports = router;