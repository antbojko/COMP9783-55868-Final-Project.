import React, { useState, useEffect } from 'react';

const ProductForm = ({ onAddProduct, onUpdateProduct, editingProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    stockQuantity: '',
  });

  // Populate form fields when editing a product
  useEffect(() => {
    if (editingProduct) {
      setProduct({
        name: editingProduct.name,
        category: editingProduct.category,
        price: editingProduct.price,
        stockQuantity: editingProduct.stockQuantity,
      });
    } else {
      // Reset form when adding a new product
      setProduct({ name: '', category: '', price: '', stockQuantity: '' });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedProduct = {
      ...product,
      price: parseFloat(product.price),
      stockQuantity: parseInt(product.stockQuantity),
    };

    if (editingProduct) {
      // Call update handler if in edit mode
      onUpdateProduct({ ...editingProduct, ...formattedProduct });
    } else {
      // Call add handler for new product
      onAddProduct(formattedProduct);
    }

    // Clear form after submission
    setProduct({ name: '', category: '', price: '', stockQuantity: '' });
  };

  return (
    <div className="card my-4 p-3 shadow-sm">
      <h3 className="text-center mb-3">
        {editingProduct ? 'Edit Product' : 'Add New Product'}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Stock Quantity</label>
          <input
            type="number"
            name="stockQuantity"
            value={product.stockQuantity}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-3">
          {editingProduct ? 'Update Product' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
