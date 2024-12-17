import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

const App = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null); // NEW: Tracks product being edited

  // Mock API call to get products (later, replace with actual backend API)
  useEffect(() => {
    setProducts([
      { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stockQuantity: 10 },
      { id: 2, name: 'Mouse', category: 'Accessories', price: 19.99, stockQuantity: 50 },
    ]);
  }, []);

  // Add new product
  const handleAddProduct = (newProduct) => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
  };

  // Update existing product
  const handleUpdateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditingProduct(null); // Clear editing state after update
  };

  // Delete product
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Handle edit button click
  const handleEditProduct = (product) => {
    setEditingProduct(product); // Set the product to be edited
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product Catalog</h1>
      {/* Pass the editingProduct state to the form */}
      <ProductForm
        onAddProduct={handleAddProduct}
        onUpdateProduct={handleUpdateProduct}
        editingProduct={editingProduct}
      />
      <ProductList
        products={products}
        onEditProduct={handleEditProduct} // Pass edit handler to list
        onDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
};

export default App;
