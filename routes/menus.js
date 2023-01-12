const express = require('express');
const router = express.Router();

const { createMenu, getMenu } = require('../controller/menus');
 
router
  .post('', createMenu)
  .get('', getMenu)


module.exports = router;