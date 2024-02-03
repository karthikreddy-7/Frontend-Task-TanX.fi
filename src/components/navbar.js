import React from "react";

const NavBar = ({ setdisplayproducts, setdisplayhome }) => {
  const handleProductsClick = () => {
    setdisplayproducts(true);
    setdisplayhome(false);
  };
  const handleHomeClick = () => {
    setdisplayhome(true);
    setdisplayproducts(false);
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
          <button className="btn btn-ghost m-1 font-bold text-white   rounded-full ">
            Sign Up/Login{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
