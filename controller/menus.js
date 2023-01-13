const Menu = require('../models/menus');

const createMenu = async (req, res) => {
  const { nombre, imagen  } = req.body;

  try {
    const newMenu = new Menu({
      nombre,
      imagen,
    })    

    await newMenu.save();
    res.json({
      message: 'Area creada exitosamente',
    });
  } catch (error) {
    res.json({
      error
    });
  }
}

const getMenu = async (req, res) => {
  const menu = await Menu.find({});
  try {
    res.json({
      menu
    })    
  } catch (error) {
    res.json({
      error
    })
  }
}

const deleteMenu = async (req, res) => {
  const { id } = req.body
  const menuDeleted = await Menu.findByIdAndDelete(id);
  
  try {
    res.json({
      message: 'Menu Eliminado correctamente',
      menuDeleted,
    })
  } catch (error) {
    res.json({
      error
    })
  }
}

module.exports = { createMenu, getMenu, deleteMenu }