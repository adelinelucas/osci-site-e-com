import ProductModel from "../models/Products.js";
//getProductById, addProduct, updateProduct, getAllProducts

export const getAllProducts = async (req, res) => {
  try {
    const id = req.params.idProduct;
    console.log(id);

    const productsList = await ProductModel.find();

    res.status(200).send({ products: productsList });
  } catch (err) {
    res.status(404).send({ message: "Sorry, no products found!" });
  }
};

export const getProductById = async (req, res) => {
  // récupérer un produit par un id
  try {
    const id = req.params.idProduct;
    console.log(id);
    console.log("bonjor");

    
    const resultat = await ProductModel.findById(id);
   
    res.send(resultat);
    res.status(200).send({ products: productsList });

   
  } catch (error) {
    res.status(404).send({ message: "Sorry i d'ont find" });
  }

};

export const updateProduct = async (req, res) => {
  // récupérer l'id du produit en bdd
  // mettre à jour le produit
  try {
    const id = req.params.idProduct;
    
    const resultat = await ProductModel.findByIdAndUpdate(id);
   
    res.send(resultat);
   
  } catch (error) {
    res.status(404).send({ message: "Sorry" });
  }
};

export const addProduct = async (req, res) => {
  // création d'un produit dans la bdd
  try {
    const newProduit = req.body;
    newProduit.img = "blablablalblablal";
    const produit = new ProductModel(newProduit);
    await produit.save();
    res.status(200).json({ message: `Product created : ${produit.title}` });
    // res.status(200).json({message: 'Product created :' + produit + "find de la phrase"})
  } catch (err) {
    res.status(404).send({ message: "Sorry, no products for Creat" });
  }
};
export const deleteProduct = async (req, res) => {
  // récupérer l'id du produit en bdd
  // et le suprimer
  try {
    const id = req.params.idProduct;
    
    const resultat = await ProductModel.findByIdAndDelete(id);
   
    res.send(resultat);
   
  } catch (error) {
    res.status(404).send({ message: "Sorry" });
  }
};

