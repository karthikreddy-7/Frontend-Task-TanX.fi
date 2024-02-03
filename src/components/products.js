import React from "react";
import { useEffect, useState } from "react";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const apiUrl = process.env.REACT_APP_API_ENDPOINT || "http://localhost:8000";

  useEffect(() => {
    // Use a GET request when fetching data
    fetch(`${apiUrl}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {});
  }, [apiUrl]);
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
