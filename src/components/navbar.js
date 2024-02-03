import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="flex items-center justify-between ">
        <div className="flex items-center ml-10">
          <div className="text-2xl text-white  font-extrabold font-sans">
            ShopKart
          </div>
        </div>
        <div className="flex m-1">
          <button className="btn btn-ghost m-1 font-bold text-white  rounded-full">
            Home
          </button>
          <button className="btn btn-ghost m-1 font-bold text-white   rounded-full">
            Products{" "}
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
