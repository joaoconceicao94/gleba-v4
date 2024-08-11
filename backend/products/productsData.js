// VERSÃO 2
import { ObjectId } from "mongodb";
import dbService from "../db/mongo.js";

const productsCollection = "products";

// Get all products
const getProducts = async () => {
  try {
    const db = await dbService.getDb();
    const products = await db.collection(productsCollection).find().toArray();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
};

// Get product by ID
const getProductById = async (productId) => {
  try {
    const db = await dbService.getDb();
    const product = await db
      .collection(productsCollection)
      .findOne({ _id: new ObjectId(productId) });
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw new Error("Failed to fetch product");
  }
};

// Get products by name
const getProductsByName = async (productName) => {
  try {
    const db = await dbService.getDb();
    const products = await db
      .collection(productsCollection)
      .find({ name: productName })
      .toArray();
    return products;
  } catch (error) {
    console.error("Error fetching products by name:", error);
    throw new Error("Failed to fetch products by name");
  }
};

// Get products by category
const getProductsByCategory = async (category) => {
  try {
    const db = await dbService.getDb();
    const products = await db
      .collection(productsCollection)
      .find({ category })
      .toArray();
    return products;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw new Error("Failed to fetch products by category");
  }
};

// Get products by sub-category
const getProductsBySubCategory = async (subCategory) => {
  try {
    const db = await dbService.getDb();
    const products = await db
      .collection(productsCollection)
      .find({ sub_category: subCategory })
      .toArray();
    return products;
  } catch (error) {
    console.error("Error fetching products by sub-category:", error);
    throw new Error("Failed to fetch products by sub-category");
  }
};

// Create a new product
const createProduct = async (newProduct) => {
  try {
    const db = await dbService.getDb();
    const result = await db
      .collection(productsCollection)
      .insertOne(newProduct);
    return result;
  } catch (error) {
    console.error("Error creating product:", error);
    throw new Error("Failed to create product");
  }
};

// Update an existing product
const updateProduct = async (id, productUpdates) => {
  try {
    const db = await dbService.getDb();
    const result = await db.collection(productsCollection).updateOne(
      { _id: new ObjectId(id) },
      {
        $set: productUpdates,
      }
    );
    if (result.matchedCount === 0) {
      throw new Error("Product not found");
    }
    return result;
  } catch (error) {
    console.error("Error updating product:", error);
    throw new Error("Failed to update product");
  }
};

// Delete a product
const deleteProduct = async (id) => {
  try {
    const db = await dbService.getDb();
    const result = await db
      .collection(productsCollection)
      .deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      throw new Error("Product not found");
    }
    return result;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw new Error("Failed to delete product");
  }
};

export default {
  getProducts,
  getProductById,
  getProductsByName,
  getProductsByCategory,
  getProductsBySubCategory,
  createProduct,
  updateProduct,
  deleteProduct,
};

// VERSÃO 1
// import { ObjectId } from "mongodb";
// import dbService from "../db/mongo.js";

// const productsCollection = "products";

// // Get all products
// const getProducts = async () => {
//   try {
//     const db = await dbService.getDb();
//     const products = await db.collection(productsCollection).find().toArray();
//     return products;
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Get product by ID
// const getProductById = async (productId) => {
//   try {
//     const db = await dbService.getDb();
//     const product = await db
//       .collection(productsCollection)
//       .findOne({ _id: new ObjectId(productId) });
//     return product;
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Get products by name
// const getProductsByName = async (productName) => {
//   try {
//     const db = await dbService.getDb();
//     const products = await db
//       .collection(productsCollection)
//       .find({
//         name: productName,
//       })
//       .toArray();
//     return products;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const getProductsByCategory = async (category) => {
//   try {
//     const db = await dbService.getDb();
//     const products = await db
//       .collection(productsCollection)
//       .find({
//         category: category,
//       })
//       .toArray();
//     return products;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const getProductsBySubCategory = async (subCategory) => {
//   try {
//     const db = await dbService.getDb();
//     const products = await db
//       .collection(productsCollection)
//       .find({
//         sub_category: subCategory,
//       })
//       .toArray();
//     return products;
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Create a new product
// const createProduct = async (newProduct) => {
//   try {
//     const db = await dbService.getDb();
//     const result = await db
//       .collection(productsCollection)
//       .insertOne(newProduct);
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Update an existing product
// const updateProduct = async (id, productUpdates) => {
//   try {
//     const db = await dbService.getDb();
//     const result = await db.collection(productsCollection).updateOne(
//       { _id: new ObjectId(id) },
//       {
//         $set: productUpdates,
//       }
//     );
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Delete a product
// const deleteProduct = async (id) => {
//   try {
//     const db = await dbService.getDb();
//     const result = await db
//       .collection(productsCollection)
//       .deleteOne({ _id: new ObjectId(id) });
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export default {
//   getProducts,
//   getProductsByName,
//   getProductsByCategory,
//   getProductsBySubCategory,
//   getProductById,
//   createProduct,
//   updateProduct,
//   deleteProduct,
// };
