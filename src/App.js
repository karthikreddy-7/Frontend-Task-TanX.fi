import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Home from "./components/home";
import Signin from "./components/signin";
import Cart from "./components/Cart";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorites, addtotalproducts } from "./redux/action";

const App = () => {
  const dispatch = useDispatch();
  const [scrolling, setScrolling] = useState(false);
  const [displayproducts, setdisplayproducts] = useState(false);
  const [displayhome, setdisplayhome] = useState(true);
  const [displaysignin, setdisplaysignin] = useState(false);
  const [displaycart, setdisplaycart] = useState(false);
  const [signin, setsignin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        dispatch(addtotalproducts(data));
      })
      .catch((error) => {});
  }, [apiUrl]);
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
      <div className=" bg-base-100 ">
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
            setdisplaycart={setdisplaycart}
            signin={signin}
          />
        </div>
        {displayhome && (
          <Home
            setdisplayproducts={setdisplayproducts}
            setdisplayhome={setdisplayhome}
          />
        )}
        {displayproducts && <Products email={email} />}
        {displaysignin && (
          <Signin
            setsignin={setsignin}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        )}
        {displaycart && <Cart />}
        <div></div>
      </div>
    </>
  );
};

export default App;
