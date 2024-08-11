import React, { useState } from "react";

const ProductManager = () => {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    description: "",
    imageUrl: "",
    category: "",
    subCategory: "",
    price: "", // Add price field to the state
  });

  const handleRetrieve = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/products/${productId}`
      );
      if (!response.ok) {
        throw new Error("Product not found");
      }
      const productData = await response.json();
      setProduct(productData);
      setUpdatedProduct({
        name: productData.name,
        description: productData.description,
        imageUrl: productData.imageUrl,
        category: productData.category,
        subCategory: productData.subCategory,
        price: productData.price, // Set the price in the state
      });
      setError(null);
    } catch (err) {
      setError(err.message);
      setProduct(null);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/products/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      const updatedData = await response.json();
      setProduct(updatedData);
      setError(null);
      alert("Produto atualizado com sucesso!");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/products/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      alert("Produto apagado com sucesso!");
      setProduct(null);
      setProductId("");
      setUpdatedProduct({
        name: "",
        description: "",
        imageUrl: "",
        category: "",
        subCategory: "",
        price: "", // Reset price field
      });
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-4">Product Manager</h1>

      {/* Form to Retrieve Product Information */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Obter Produto</h2>
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          placeholder="Adicionar ID"
          className="border px-2 py-1 mb-2"
        />
        <button
          onClick={handleRetrieve}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Obter Produto
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {/* Display Product Information */}
      {product && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Informação do Produto</h2>
          <p>
            <strong>ID:</strong> {product._id}
          </p>
          <p>
            <strong>Nome:</strong> {product.name}
          </p>
          <p>
            <strong>Descrição:</strong> {product.description}
          </p>
          <p>
            <strong>Imagem:</strong> {product.imageUrl}
          </p>
          <p>
            <strong>Preço:</strong> {product.price}€ {/* Display price */}
          </p>
          <p>
            <strong>Categoria:</strong> {product.category}
          </p>
          <p>
            <strong>Sub-Categoria:</strong> {product.subCategory}
          </p>
        </div>
      )}

      {/* Form to Edit and Update Product */}
      {product && (
        <div>
          <h2 className="text-xl font-semibold">Editar Produto</h2>
          <div className="mb-4">
            <label className="block">Nome:</label>
            <input
              type="text"
              value={updatedProduct.name}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, name: e.target.value })
              }
              className="border px-2 py-1"
            />
          </div>
          <div className="mb-4">
            <label className="block">Descrição:</label>
            <textarea
              value={updatedProduct.description}
              onChange={(e) =>
                setUpdatedProduct({
                  ...updatedProduct,
                  description: e.target.value,
                })
              }
              className="border px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block">Imagem:</label>
            <input
              type="text"
              value={updatedProduct.imageUrl}
              onChange={(e) =>
                setUpdatedProduct({
                  ...updatedProduct,
                  imageUrl: e.target.value,
                })
              }
              className="border px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block">Preço:</label>
            <input
              type="text"
              value={updatedProduct.price}
              onChange={(e) =>
                setUpdatedProduct({
                  ...updatedProduct,
                  price: e.target.value,
                })
              }
              className="border px-2 py-1"
            />
          </div>
          <div className="mb-4">
            <label className="block">Categoria:</label>
            <input
              type="text"
              value={updatedProduct.category}
              onChange={(e) =>
                setUpdatedProduct({
                  ...updatedProduct,
                  category: e.target.value,
                })
              }
              className="border px-2 py-1"
            />
          </div>
          <div className="mb-4">
            <label className="block">Sub-Categoria:</label>
            <input
              type="text"
              value={updatedProduct.subCategory}
              onChange={(e) =>
                setUpdatedProduct({
                  ...updatedProduct,
                  subCategory: e.target.value,
                })
              }
              className="border px-2 py-1"
            />
          </div>

          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Atualizar Produto
          </button>
        </div>
      )}

      {/* Form to Delete Product */}
      {product && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Apagar Produto</h2>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Apagar Produto
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductManager;
