import mongoose from "mongoose";

mongoose.set("debug", true);

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A product must contain a title."],
    minlength: 3,
    maxlength: 150,
  },
  resume: {
    type: String,
    required: [true, "A product must contain a resume."],
    minlength: 3,
    maxlength: 150,
  },
  description: {
    type: String,
    required: [true, "A product must contain a description."],
    minlength: 10,
  },
  ingredients: {
    type: String,
    required: [true, "A product must contain a list of ingredients."],
    minlength: 3,
  },
  img: {
    type: String,
    default: "./public/products/logo-transparent-bg-white.png",
  },
  price: {
    type: Number,
    required: [true, "A product must contain a price."],
  },
  oldPrice: {
    type: Number,
  },
  isBestSeller: {
    type: Boolean,
    default: false,
  },
  stockQuantity: {
    type: Number,
    required: [true, "A product must contain a stock quantity."],
  },
  category: {
    type: [String],
    // required:[true, 'A product must contain at least one category.'],
  },
  brand: {
    type: String,
    required: [true, "A product must contain a brand."],
    minlength: 1,
    maxlength: 150,
  },
});

const ProductModel = mongoose.model("Product", ProductSchema);
export default ProductModel;
