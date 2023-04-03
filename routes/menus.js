const express = require('express');
const router = express.Router();

const { createMenu, getMenu, editMenu, searchMenu, deleteMenu } = require('../controller/menus');
 
router
  .post('', createMenu)
  .get('', getMenu)
  .put('', editMenu)
  .get('/:search', searchMenu)
  .delete('', deleteMenu)

module.exports = router;