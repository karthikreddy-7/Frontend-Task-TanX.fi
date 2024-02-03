import React from "react";
import { useEffect, useState } from "react";

export const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const apiUrl =
      process.env.REACT_APP_API_ENDPOINT || "http://localhost:8000";
    fetch(`${apiUrl}/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // The empty dependency array ensures that this effect runs only once on mount
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
