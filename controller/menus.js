const Menu = require('../models/menus');

const createMenu = async (req, res) => {
  const { nombre, imagen, empresa, type  } = req.body;

  try {
    const newMenu = new Menu({
      nombre,
      imagen,
      empresa,
      type,
    })    

    await newMenu.save();
    res.json({
      message: 'Menu creada exitosamente',
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
      message: 'Menu obtenido correctamente',
      menu
    })    
  } catch (error) {
    res.json({
      error
    })
  }
}
const searchMenu = async (req, res) => {
  const { search } = req.params;
  const regex = new RegExp(search, 'i')
  const menuFounded = await Menu.find({ nombre: {$regex: regex} })
  try {
    res.json({
      menuFounded
    })
  } catch (error) {
    res.json({
      error
    })
  }
}

const editMenu = async (req, res) => {
  const { nombre, empresa, id } = req.body;
  const menuEdited = await Menu.findByIdAndUpdate(id, {nombre, empresa})
  try {
    res.json({
      message: 'Menu editado correctamente',
      menuEdited
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

module.exports = { createMenu, getMenu, editMenu, searchMenu, deleteMenu }