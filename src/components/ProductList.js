
import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div>
      <h1>Mobile Store</h1>

      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
            />

            <h2>{product.name}</h2>
            <p>₹{product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
