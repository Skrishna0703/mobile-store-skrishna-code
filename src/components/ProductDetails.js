
import React from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetails({ products }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id.toString() === id
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <img
        src={product.image}
        alt={product.name}
      />

      <h1>{product.name}</h1>

      <p>{product.description}</p>

      <h2>₹{product.price}</h2>

      <Link to="/" className="btn">
        Back
      </Link>
    </div>
  );
}

export default ProductDetails;