import React, { useEffect, useState } from "react";
import cart from "../assets/img/cart.png";
import fav from "../assets/img/fav.webp";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorites, addtotalproducts } from "../redux/action";
import { useSelector } from "react-redux";

const Products = ({ email }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [showproduct, setShowProduct] = useState(false);
  const [producttodisplay, setproducttodisplay] = useState();
  const [alert, setAlert] = useState(0);
  const apiUrl = process.env.REACT_APP_API_ENDPOINT || "http://localhost:8000";
  const cartItems = useSelector((state) => state.cart);
  const handleAddToCart = (item) => {
    console.log("Current Cart Items:", cartItems);
    setAlert(1);
    setTimeout(() => {
      setAlert(0);
    }, 1500);
    const payload = {
      productId: item.id,
      quantity: 1, // or any other quantity logic you have
    };

    dispatch(addToCart(payload));

    // Fetch user data
    fetch(`${apiUrl}/users?email=${email}`)
      .then((response) => response.json())
      .then((userData) => {
        const existingCartItemIndex = (userData[0]?.cart || []).findIndex(
          (cartItem) => cartItem.productId === item.id
        );

        if (existingCartItemIndex !== -1) {
          // If the product already exists in the cart, increase the quantity
          const updatedUser = {
            ...userData[0],
            cart: [
              ...userData[0].cart.slice(0, existingCartItemIndex),
              {
                productId: item.id,
                quantity: userData[0].cart[existingCartItemIndex].quantity + 1,
              },
              ...userData[0].cart.slice(existingCartItemIndex + 1),
            ],
          };
          updateCartOnServer(updatedUser);
        } else {
          // If the product is not in the cart, add it
          const updatedUser = {
            ...userData[0],
            cart: [
              ...(userData[0].cart || []), // Preserve existing cart items
              { productId: item.id, quantity: 1 }, // Add the new item
            ],
          };
          updateCartOnServer(updatedUser);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const updateCartOnServer = (updatedUser) => {
    // Update the user's cart on the server
    fetch(`${apiUrl}/users/${updatedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => response.json())
      .then((updatedUserData) => {
        console.log("User cart updated:", updatedUserData);
      })
      .catch((error) => {
        console.error("Error updating user cart:", error);
      });
  };
  const handlebuyclick = () => {
    setAlert(2);
    setTimeout(() => {
      setAlert(0);
    }, 1500);
  };
  const handleAddToFavorites = (item) => {
    dispatch(addToFavorites(item));
  };

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
        //dispatch(addtotalproducts(data));
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
    <div className="container mx-auto">
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
                <div
                  className="w-6 h-6"
                  onClick={() => handleAddToCart(product)}
                >
                  <img src={cart} />
                </div>
                <div className="w-6 h-6">
                  <img class="mask mask-heart" src={fav} />
                </div>
              </div>
            </div>
          ))}
          <div className="absolute bottom-6 right-1/2">
            {alert === 1 && (
              <div role="alert" class="alert alert-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Added To Cart !</span>
              </div>
            )}
          </div>
        </div>
      )}

      {showproduct && (
        <div className="">
          <div className="bg-white flex text-2xl justify-between items-stretch">
            <div class="hero min-h-screen">
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
                  <button
                    class="btn btn-ghost text-white bg-blue-500 m-6"
                    onClick={handlebuyclick}
                  >
                    Buy Now
                  </button>
                  <button
                    class="btn btn-ghost text-white bg-blue-500 m-6"
                    onClick={() => handleAddToCart(producttodisplay)}
                  >
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
              <div className="absolute bottom-8">
                {alert === 1 && (
                  <div role="alert" class="alert alert-success">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Added To Cart !</span>
                  </div>
                )}
                {alert === 2 && (
                  <div role="alert" class="alert alert-success">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="stroke-current shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Order Placed Successful !</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
