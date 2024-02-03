import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Home from "./components/home";
import Signin from "./components/signin";

const App = () => {
  const [scrolling, setScrolling] = useState(false);
  const [displayproducts, setdisplayproducts] = useState(false);
  const [displayhome, setdisplayhome] = useState(true);
  const [displaysignin, setdisplaysignin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldScrolling = scrollTop > 0;

      if (shouldScrolling !== scrolling) {
        setScrolling(shouldScrolling);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  return (
    <>
      <div className="bg-white ">
        <div
          className={`absolute bg-blue-400 rounded-xl shadow-md box-border h-16 min-w-[90vw] top-4 left-14 transition-all ${
            scrolling
              ? "opacity-60 transform -translate-y-10"
              : "opacity-100 transform translate-y-0"
          }`}
        >
          <NavBar
            setdisplayproducts={setdisplayproducts}
            setdisplayhome={setdisplayhome}
            setdisplaysignin={setdisplaysignin}
          />
        </div>
        {displayhome && (
          <Home
            setdisplayproducts={setdisplayproducts}
            setdisplayhome={setdisplayhome}
          />
        )}
        {displayproducts && <Products />}
        {displaysignin && <Signin />}
        <div></div>
      </div>
    </>
  );
};

export default App;
