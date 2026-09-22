
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Admin from "./Admin";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 14",
      price: 69999,
      description: "Apple iPhone 14 with powerful performance.",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      price: 74999,
      description: "Samsung Galaxy S23 with an excellent camera.",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "OnePlus 11",
      price: 56999,
      description: "OnePlus smartphone with great performance.",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 4,
      name: "Google Pixel 7",
      price: 49999,
      description: "Google Pixel with an amazing camera.",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 5,
      name: "Xiaomi 13 Pro",
      price: 59999,
      description: "Premium Xiaomi smartphone.",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 6,
      name: "Vivo X90",
      price: 59999,
      description: "Vivo smartphone with powerful features.",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 7,
      name: "Oppo Find X5",
      price: 54999,
      description: "Oppo smartphone with premium design.",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 8,
      name: "Realme GT Neo",
      price: 29999,
      description: "High-performance Realme smartphone.",
      image: "https://via.placeholder.com/200",
    },
  ]);

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
      price: Number(product.price),
    };

    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts(
      products.filter((product) => product.id !== id)
    );
  };

  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    );
  };

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<ProductList products={products} />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetails products={products} />}
        />

        <Route
          path="/admin"
          element={
            <Admin
              products={products}
              addProduct={addProduct}
              deleteProduct={deleteProduct}
              updateProduct={updateProduct}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
