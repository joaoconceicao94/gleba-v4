// VERSÃO 2
import productsData from "./productsData.js";

const getProducts = async () => {
  const products = await productsData.getProducts();
  return products;
};

const getProductsByName = async (productName) => {
  const products = await productsData.getProductsByName(productName);
  return products;
};

const getProductsByCategory = async (category) => {
  const products = await productsData.getProductsByCategory(category);
  return products;
};

const getProductsBySubCategory = async (subCategory) => {
  const products = await productsData.getProductsBySubCategory(subCategory);
  return products;
};

// New method to get a product by its ID
const getProductById = async (id) => {
  const product = await productsData.getProductById(id);
  return product;
};

const createProduct = async (newProduct) => {
  const result = await productsData.createProduct(newProduct);
  // OPTION 2: Return the created product
  const product = await productsData.getProductById(result.insertedId);
  return product;
};

const updateProduct = async (id, productUpdates) => {
  const result = await productsData.updateProduct(id, productUpdates);
  return result;
};

const deleteProduct = async (id) => {
  const result = await productsData.deleteProduct(id);
  return result;
  // OPTION 1: Send the updated list of products (if needed)
  // const allProducts = getProducts();
  // return allProducts;
};

export default {
  getProducts,
  getProductsByName,
  getProductsByCategory,
  getProductsBySubCategory,
  getProductById, // Export the new method
  createProduct,
  updateProduct,
  deleteProduct,
};

// VERSÃO 1
// import productsData from "./productsData.js";

// const getProducts = async () => {
//   const products = await productsData.getProducts();
//   return products;
// };

// const getProductsByName = async (productName) => {
//   const products = await productsData.getProductsByName(productName);
//   return products;
// };

// const getProductsByCategory = async (category) => {
//   const products = await productsData.getProductsByCategory(category);
//   return products;
// };

// const getProductsBySubCategory = async (subCategory) => {
//   const products = await productsData.getProductsBySubCategory(subCategory);
//   return products;
// };

// const createProduct = async (newProduct) => {
//   const result = await productsData.createProduct(newProduct);
//   // OPTION 1: - retornar todos os produtos
//   // const allProducts = getProducts();
//   // return allProducts;
//   // OPTION 2: - retornar o produto certo
//   const product = await productsData.getProductById(result.insertedId);
//   return product;
// };

// const updateProduct = async (id, productUpdates) => {
//   const result = await productsData.updateProduct(id, productUpdates);
//   return result;
// };

// const deleteProduct = async (id) => {
//   const result = await productsData.deleteProduct(id);
//   return result;
//   // OPTION 1: enviar a lista toda atualizada (getProducts())
//   // const allProducts = getProducts();
//   // return allProducts;
// };

// export default {
//   getProducts,
//   getProductsByName,
//   getProductsByCategory,
//   getProductsBySubCategory,
//   createProduct,
//   updateProduct,
//   deleteProduct,
// };
