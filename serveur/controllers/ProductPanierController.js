import ProductModel from "../models/Products.js"
//getProductById, addProduct, updateProduct, getAllProducts 

export const getAllProducts = async(req, res) =>{
    try{

        const id = req.params.idProduct
        console.log(id)

        const productsList = await ProductModel.find()

        res.status(200).send({products: productsList})

    }catch(err){
        res.status(404).send({message: "Sorry, no products found!"})
    }
}

export const getProductById = async(req, res) =>{
    // récupérer un produit par un id
}

export const updateProduct = async(req, res) =>{
    // récupérer l'id du produit en bdd
    // mettre à jour le produit
}

export const addProduct = async(req, res) =>{
    // création d'un produit dans la bdd
    const produit = new ProductModel(req.body)
    await produit.save()
    res.status(200).json({
        success:true,
        produit
    })
}