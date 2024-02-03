import React, { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

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
    <div className="text-black">
      <h1>Product List</h1>
      <ul>
        {console.log(products)}
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
