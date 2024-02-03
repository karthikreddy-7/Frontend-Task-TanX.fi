import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";

const App = () => {
  const [products, setProducts] = useState([]);
  const [scrolling, setScrolling] = useState(false);

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

  useEffect(() => {
    const apiUrl =
      process.env.REACT_APP_API_ENDPOINT || "http://localhost:8000";

    // Fetch data when the component mounts
    fetch(`${apiUrl}/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  return (
    <>
      <div className="bg-white ">
        <div
          className={`fixed bg-blue-400 rounded-xl shadow-md box-border h-16 min-w-[90vw] top-4 left-14 transition-all ${
            scrolling
              ? "opacity-60 transform -translate-y-10"
              : "opacity-100 transform translate-y-0"
          }`}
        >
          <NavBar />
        </div>

        <div></div>
      </div>
    </>
  );
  {
    /*
          <div className="text-black">
      <h1>Product List</h1>
      <ul>
        {console.log(products)}
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
      */
  }
};

export default App;
