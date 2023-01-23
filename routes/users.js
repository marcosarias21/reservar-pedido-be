const express = require('express');
const router = express.Router();

const { createUser, addProductUser, getUsers, searchUser } = require('../controller/users');

router
.post('', createUser)
.put('', addProductUser)
.get('', getUsers)
.get('/:search', searchUser)
module.exports = router;