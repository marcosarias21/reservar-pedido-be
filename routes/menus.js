const express = require('express');
const router = express.Router();

const { createMenu, getMenu, deleteMenu } = require('../controller/menus');
 
router
  .post('', createMenu)
  .get('', getMenu)
  .delete('', deleteMenu)

module.exports = router;