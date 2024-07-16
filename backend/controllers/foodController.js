import fs from 'fs';
import { foodModel } from '../models/foodModel.js';
import { log } from 'console';

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category: req.body.category,
  });

  try {
    await food.save();
    res.json({ success: true, msg: 'Food Added' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: 'Error' });
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: 'Error' });
  }
};

const removeFood = async (req, res) => {
  try {
    // Find the food item by ID
    const meal = await foodModel.findById(req.body.id);
    if (!meal) {
      return res.status(404).json({ success: false, msg: 'Food not found' });
    }
    // Delete the associated image file
    fs.unlink(`uploads/${meal.image}`, (err) => {
      if (err) {
        console.error(err);
      }
    });
    // Delete the food item from the database
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, msg: 'Food removed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: 'Error removing food' });
  }
};

export { addFood, listFood, removeFood };
