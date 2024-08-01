const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { string } = require("joi");

const app = express();
app.use(cors());

mongoose.connect(
  "DB_URL=mongodb+srv://joao:VolcanoChoir2024@cluster0.eteegfe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
  category: String,
  subCategory: String,
});

const Product = mongoose.model("Product", ProductSchema);

app.get("/products", async (req, res) => {
  const category = req.query.category;
  let products;
  if (category) {
    products = await Product.find({ category });
  } else {
    products = await Product.find();
  }
  res.json(products);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
