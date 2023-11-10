import mongoose from "mongoose";
import ProductModel from "../models/Products.js";
/// chargement du middleware multer pour le stockage des fichiers

/*
Create a product
*/
export const createProduct = async(req, res) =>{
    console.log(req.body)
    const newproduct = req.body;
    const img = req.body.fileName;

    try{
        const createProduct = await ProductModel.create({...newproduct, img:img})
        console.log(createProduct);

        if(createProduct){
            res.status(201).json({message: `Process ok, product: ${createProduct.title} with id ${createProduct._id} created successfully.`})
        }

    }catch(err){
        res.status(400).json({message: err.message})
    }
}

export const getProducts = async(req,res) =>{
    console.log('in get method')
    res.send('message reçu')
}

