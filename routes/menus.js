const express = require('express');
const router = express.Router();

const { createMenu } = require('../controller/menus');
 
router
  .post('', createMenu)


module.exports = router;