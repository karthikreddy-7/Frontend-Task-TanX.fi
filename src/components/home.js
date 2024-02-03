import React from "react";
import hero from "../assets/img/hero.jpg";

const Home = ({ setdisplayproducts, setdisplayhome }) => {
  const handleProductsClick = () => {
    setdisplayproducts(true);
    setdisplayhome(false);
  };
  return (
    <div className="bg-white flex text-2xl justify-center items-center">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse m-10">
          <img src={hero} class=" h-1/4 w-1/2 rounded-lg shadow-xl" />
          <div>
            <h1 class="text-5xl font-bold">Shopping Made Easy!</h1>
            <p class="py-6 text-xl">
              FrontEnd Task Given By TanX.fi for making a Shopping WebApp Using
              ReactJS.
            </p>
            <button
              class="btn btn-ghost text-white bg-blue-500"
              onClick={handleProductsClick}
            >
              See Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
