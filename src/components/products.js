import React, { useEffect, useState } from "react";
import cart from "../assets/img/cart.png";
import fav from "../assets/img/fav.webp";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showproduct, setShowProduct] = useState(false);
  const [producttodisplay, setproducttodisplay] = useState();
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

  const handlesingleproductclick = (givenproduct) => {
    setShowProduct(true);
    setproducttodisplay(givenproduct);
    console.log(producttodisplay);
  };

  const handleBacktoproduct = () => {
    setShowProduct(false);
    setproducttodisplay(null);
  };

  return (
    <div className="container mx-auto bg-base-100">
      {!showproduct && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 mt-20 m-10">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover h-48 w-full mb-4"
                onClick={() => handlesingleproductclick(product)}
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
      )}

      {showproduct && (
        <div className="">
          <div className="bg-white flex text-2xl justify-between items-stretch">
            <div class="hero min-h-screen bg-base-200">
              <div class="hero-content flex-col lg:flex-row m-12 mt-20">
                <img
                  src={producttodisplay.image}
                  class=" h-1/4 w-1/4 rounded-lg shadow-xl mr-10 ml-10"
                />
                <div className="m-4 p-4">
                  <h1 class="text-xl font-bold">{producttodisplay.title}</h1>
                  <p class="py-6 text-lg">{producttodisplay.description}</p>
                  <span className="ml-1">
                    ₹{producttodisplay.amount || "N/A"}
                  </span>
                  <br></br>
                  <br></br>
                  <button class="btn btn-ghost text-white bg-blue-500 m-6">
                    Buy Now
                  </button>
                  <button class="btn btn-ghost text-white bg-blue-500 m-6">
                    Add To Cart
                    <div className="w-6 h-6">
                      <img src={cart} />
                    </div>
                  </button>
                  <button
                    class="btn btn-ghost text-white bg-blue-500 m-6"
                    onClick={handleBacktoproduct}
                  >
                    Back To Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
