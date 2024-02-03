import React from "react";

const NavBar = ({ setdisplayproducts, setdisplayhome, setdisplaysignin }) => {
  const handleProductsClick = () => {
    setdisplayproducts(true);
    setdisplayhome(false);
    setdisplaysignin(false);
  };
  const handleHomeClick = () => {
    setdisplayhome(true);
    setdisplayproducts(false);
    setdisplaysignin(false);
  };
  const handleSignInClick = () => {
    setdisplayhome(false);
    setdisplayproducts(false);
    setdisplaysignin(true);
  };
  return (
    <>
      <div className="flex items-center justify-between ">
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
          <button
            className="btn btn-ghost m-1 font-bold text-white   rounded-full "
            onClick={handleSignInClick}
          >
            Sign Up/Login{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
