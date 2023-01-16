const express = require('express');
const router = express.Router();

const { createUser, addProductUser } = require('../controller/users');

router
.post('', createUser)
.put('', addProductUser)

module.exports = router;