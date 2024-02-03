import React from "react";
import cart from "../assets/img/cart.png";

const NavBar = ({
  setdisplayproducts,
  setdisplayhome,
  setdisplaysignin,
  setdisplaycart,
  signin,
}) => {
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

          {signin && (
            <button
              className="btn btn-ghost m-1 font-bold text-white justify-center items-center rounded-full "
              onClick={handlecartclick}
            >
              <div className="w-6 h-6">
                <img src={cart} />
              </div>
            </button>
          )}
          {signin && (
            <button
              className="btn btn-ghost m-1 font-bold text-white   rounded-full "
              onClick={handleSignInClick}
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
