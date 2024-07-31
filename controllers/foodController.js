import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood=async(req, res)=>{
    let image_filename=`${req.file.filename}`;

    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save();
        res.json({success:true, message:"Food Added to Database!"})
    }
    catch(error){
        console.log(error);
        res.json({success:false, message:"Error while adding food to database"})
    }
}

//List all food
const listFood= async(req, res)=>{
    try{
        const foods=await foodModel.find({});
        res.json({success:true, data:foods});
    }
    catch(error){
        console.log(error);
        res.json({success:false, message:"Unable to list all the food data"});
    }
}

//Remove Food Item
const removeFood=async(req, res)=>{
    try{
        const food=await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, ()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food Item is deleted successfully!"});
    }
    catch(error){
        console.log("error");
        res.json({success:false, message:"unable to delete the food"});
    }
}

export {addFood, listFood, removeFood};