const express = require('express');
const router = express.Router();

const { createUser } = require('../controller/users');

router
  .post('', createUser);

module.exports = router;