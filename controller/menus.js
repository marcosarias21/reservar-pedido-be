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
  const areas = await Menu.find({});
  try {
    res.json({
      areas
    })    
  } catch (error) {
    res.json({
      error
    })
  }
}
module.exports = { createMenu, getMenu }