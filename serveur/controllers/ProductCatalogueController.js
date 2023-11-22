import mongoose from "mongoose";
import ProductModel from "../models/Products.js";
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
/*
Create a product
*/
export const createProduct = async(req, res) =>{
    const newproduct = req.body;
    const imgName = req.file.filename;
    // newproduct.img = imgName

    try{
        const createProduct = await ProductModel.create({...newproduct, img: imgName})

        if(createProduct){
            res.status(201).json({message: `Process ok, product: ${createProduct.title} with id ${createProduct._id} created successfully.`})
        }

    }catch(err){
        res.status(400).json({message: err.message})
    }
}

/*
Get all procducts
*/
export const getProducts = async(req,res) =>{
    // récupérer les images
    // const imagePath = path.join(__dirname, 'uploads', filename);
    // const __dirname = dirname(fileURLToPath(import.meta.url));
    // console.log(__dirname)

    try{

        const productsList = await ProductModel.find({})
        productsList.map((product)=>{
            product.img = process.env.BACK_ORIGIN + '/products/'+ product.img;
        })

        if(productsList){
            res.status(200).json({message: productsList})
        }else{
            res.status(200).json({message: `No product found en the database`})

        }

    }catch(err){
        res.status(400).json({message: err.message})
    }
}

/*
Get one product by id
*/
export const getProductById = async(req, res) =>{
    // console.log(path)
    try{
        const {id:_id}= req.params;
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({message: 'An error occured, the ID given is not valid.'});

        const product = await ProductModel.findById(_id)

        if(!product) return res.status(404).json({message: 'An error occured, the ID is not matching any product in database.'});

        // const imagePath = path.join(__dirname, 'uploads', filename);
        // product.img = dirname + '/public/products/' + product.img
        product.img = path.join(process.env.ORIGIN, '/products/', product.img)
        console.log(product.img)

        res.status(200).json({message: product})
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

/*
Get all products order by price ascendent
*/
export const getAllProductOrderByAscendingPrice = async(req, res) =>{
    try{

        const productsListSorted = await ProductModel.find({}).sort('price')

        if(productsListSorted.length > 0){
            res.status(200).json({message: productsListSorted})
        }else{
            res.status(200).json({message: `No product found en the database`})

        }

    }catch(err){
        res.status(400).json({message: err.message})
    }
}

/*
Get all products order by price descentent
*/
export const getAllProductOrderByDecreasingPrice = async(req, res) =>{
    try{

        const productsListSorted = await ProductModel.find({}).sort('-price')

        if(productsListSorted.length > 0){
            res.status(200).json({message: productsListSorted})
        }else{
            res.status(200).json({message: `No product found en the database`})

        }

    }catch(err){
        res.status(400).json({message: err.message})
    }
}
