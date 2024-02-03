import React from "react";

export const Products = ({ products }) => {
  return (
    <div>
      {" "}
      <div className="text-black">
        <h1 style={{ color: "white" }}>Product List</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id} style={{ color: "black" }}>
              {product.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
