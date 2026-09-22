
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Admin({
  products,
  addProduct,
  deleteProduct,
  updateProduct,
}) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
  });

  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
      updateProduct({
        ...formData,
        id: editId,
        price: Number(formData.price),
      });

      setEditId(null);
    } else {
      addProduct(formData);
    }

    setFormData({
      name: "",
      description: "",
      image: "",
      price: "",
    });
  };

  const handleEdit = (product) => {
    setEditId(product.id);

    setFormData({
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
    });
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          className="form-control"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          className="form-control"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />

        <input
          className="form-control"
          name="price"
          placeholder="Price"
          type="number"
          value={formData.price}
          onChange={handleChange}
        />

        <button type="submit">
          {editId !== null ? "Save" : "Add"}
        </button>
      </form>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>

            <Link to={`/products/${product.id}`}>
              View Details
            </Link>

            <button
              className="float-right"
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>

            <button
              className="float-right"
              onClick={() => handleEdit(product)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
