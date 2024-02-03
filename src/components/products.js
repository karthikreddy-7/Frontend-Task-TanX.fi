import React, { useEffect, useState } from "react";
import cart from "../assets/img/cart.png";
import fav from "../assets/img/fav.webp";

const Products = () => {
  const [products, setProducts] = useState([]);
  const apiUrl = process.env.REACT_APP_API_ENDPOINT;

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
    <div className="container mx-auto">
      <h1 className="text-white text-4xl mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 m-10">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover h-48 w-full mb-4"
            />
            <p className="text-lg font-bold">T-shirts For Men</p>
            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <div className="ml-1 flex bg-green-500 text-white w-8 items-center justify-center  text-xs p-1 rounded-md">
                  {product.rating || "N/A"}
                </div>
              </div>
              <div className="flex items-center">
                <span className="ml-1">₹{product.amount || "N/A"}</span>
              </div>
            </div>
            <div className="flex justify-between items-stretch mt-4">
              <div className="w-6 h-6">
                <img src={cart} />
              </div>
              <div className="w-6 h-6">
                <img class="mask mask-heart" src={fav} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
