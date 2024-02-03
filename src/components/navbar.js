import React from "react";
import cart from "../assets/img/cart.png";
import { useSelector } from "react-redux";

const NavBar = ({
  setdisplayproducts,
  setdisplayhome,
  setdisplaysignin,
  setdisplaycart,
  signin,
  setsignin,
}) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + 1, 0);
  const handleProductsClick = () => {
    setdisplayproducts(true);
    setdisplayhome(false);
    setdisplaysignin(false);
    setdisplaycart(false);
  };
  const handleHomeClick = () => {
    setdisplayhome(true);
    setdisplayproducts(false);
    setdisplaysignin(false);
    setdisplaycart(false);
  };
  const handleSignInClick = () => {
    setdisplayhome(false);
    setdisplayproducts(false);
    setdisplaysignin(true);
    setdisplaycart(false);
  };
  const handlecartclick = () => {
    setdisplayhome(false);
    setdisplayproducts(false);
    setdisplaysignin(false);
    setdisplaycart(true);
  };
  const handlelogout = () => {
    setsignin(false);
    setdisplayhome(true);
    setdisplayproducts(false);
    setdisplaysignin(false);
    setdisplaycart(false);
  };
  return (
    <>
      <div className="flex items-center justify-between  ">
        <div className="flex items-center ml-10">
          <button
            className="text-2xl text-white  font-extrabold font-sans"
            onClick={handleHomeClick}
          >
            ShopKart
          </button>
        </div>
        <div className="flex m-1">
          <button
            className="btn btn-ghost m-1 font-bold text-white  rounded-full"
            onClick={handleHomeClick}
          >
            Home
          </button>
          <button
            className="btn btn-ghost m-1 font-bold text-white rounded-full"
            onClick={handleProductsClick}
          >
            Products
          </button>
          {!signin && (
            <button
              className="btn btn-ghost m-1 font-bold text-white   rounded-full "
              onClick={handleSignInClick}
            >
              Sign Up/Login{" "}
            </button>
          )}
          <button
            className="relative btn btn-ghost m-1 font-bold text-white justify-center items-center rounded-full"
            onClick={handlecartclick}
          >
            <div class="indicator">
              <span class="indicator-item badge badge-secondary">
                {<span>{totalItems}</span>}
              </span>
              <div className="w-6 h-6">
                <img src={cart} alt="Cart Icon" />
              </div>
            </div>
          </button>
          {signin && (
            <button
              className="btn btn-ghost m-1 font-bold text-white   rounded-full "
              onClick={handlelogout}
            >
              Logout{" "}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
