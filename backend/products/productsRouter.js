// VERSÃO 2

import express from "express";
import productsService from "./productsService.js";
import productsSchemas from "./productsSchemas.js";

const router = express.Router();

// Route to get products with optional filters
router.get("/products", async (req, res) => {
  const name = req.query.name;
  const category = req.query.category;
  const sub_category = req.query.sub_category;

  try {
    if (name) {
      const products = await productsService.getProductsByName(name);
      return res.status(200).json(products);
    }

    if (category) {
      const products = await productsService.getProductsByCategory(category);
      return res.status(200).json(products);
    }

    if (sub_category) {
      const products = await productsService.getProductsBySubCategory(
        sub_category
      );
      return res.status(200).json(products);
    }

    const products = await productsService.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

// Route to get a single product by ID
router.get("/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productsService.getProductById(id); // Ensure this method is implemented in your service
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch product" });
  }
});

// Route to create a new product
router.post("/products", async (req, res) => {
  const { error, value } = productsSchemas.createProductSchema.validate(
    req.body
  );

  if (error) {
    return res.status(400).send({ message: error.message });
  }

  try {
    const createdProduct = await productsService.createProduct(value);
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: "Failed to create product" });
  }
});

// Route to update a product by ID
router.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await productsService.updateProduct(id, req.body);
    if (!result || result.modifiedCount === 0) {
      return res
        .status(404)
        .json({ message: "Product not found or no changes made" });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Failed to update product" });
  }
});

// Route to delete a product by ID
router.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await productsService.deleteProduct(id);
    if (!result || result.deletedCount === 0) {
      return res.status(404).send({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product" });
  }
});

export default router;

// VERSÃO 1
// import express from "express";
// import productsService from "./productsService.js";
// import productsSchemas from "./productsSchemas.js";

// const router = express.Router();

// router.get("/products", async (req, res) => {
//   // localhost:3000/products?name=coxinha
//   const name = req.query.name;
//   const category = req.query.category;
//   const sub_category = req.query.sub_category;

//   if (name) {
//     const products = await productsService.getProductsByName(name);
//     return res.status(200).json(products);
//   }

//   if (category) {
//     const products = await productsService.getProductsByCategory(category);
//     return res.status(200).json(products);
//   }

//   if (sub_category) {
//     const products = await productsService.getProductsBySubCategory(
//       sub_category
//     );
//     return res.status(200).json(products);
//   }

//   const products = await productsService.getProducts();
//   res.json(products);
// });

// router.post("/products", async (req, res) => {
//   const { error, value } = productsSchemas.createProductSchema.validate(
//     req.body
//   );

//   if (error) {
//     return res.status(400).send({ message: error.message });
//   }

//   const createdProduct = await productsService.createProduct(value);
//   res.status(201).json(createdProduct);
// });

// router.put("/products/:id", async (req, res) => {
//   const result = await productsService.updateProduct(req.params.id, req.body);
//   if (!result || result.modifiedCount === 0) {
//     return res
//       .status(404)
//       .json({ message: "The Product you tried to update was not found." });
//   }
//   res.json(result);
// });

// router.delete("/products/:id", async (req, res) => {
//   console.log(req.params.id);
//   const result = await productsService.deleteProduct(req.params.id);
//   if (!result || result.deletedCount === 0) {
//     return res.status(404).send({ message: "Product not found." });
//   }
//   res.status(200).json({ message: "Product deleted successfully." });
// });

// export default router;
