const express = require('express');
const router = express.Router();

const { createMenu, getMenu, editMenu, deleteMenu } = require('../controller/menus');
 
router
  .post('', createMenu)
  .get('', getMenu)
  .put('', editMenu)
  .delete('', deleteMenu)

module.exports = router;