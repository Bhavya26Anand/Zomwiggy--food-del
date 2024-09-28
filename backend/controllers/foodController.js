import { response } from "express";
import foodModel from "../models/foodModel.js";
import fs from "fs";


// Update food item
const updateFood = async (req, res) => {
    try {
      const food = await foodModel.findById(req.body.id);
  
      // Check if a new image is uploaded
      if (req.file) {
        // Remove the old image if it exists
        fs.unlink(`uploads/${food.image}`, () => {});
        food.image = `${req.file.filename}`;
      }
  
      // Update other fields
      food.name = req.body.name || food.name;
      food.description = req.body.description || food.description;
      food.price = req.body.price || food.price;
      food.category = req.body.category || food.category;
  
      await food.save();
      res.json({ success: true, message: "Food Updated", data: food });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error Updating Food" });
    }
  };

// add food item

const addFood = async (req, res) => {
  
    let image_filename = `${req.file.filename}`;
  
    const food = new foodModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image:image_filename
  })
  try{
    await food.save();
    res.json({success:true,message:"Food Added"})

  }catch(error){
    console.log(error)
    res.json({success:false,message:"Error"})

  }
};


// all food list
const listFood = async (req,res) =>{
    try{
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})

    }catch(error){

        console.log(error);
        res.json({success:false , message:"Error"})
    }

}

// remove food item

const removeFood = async(req,res) =>{
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})

    }

}

export { addFood ,listFood,removeFood,updateFood};
