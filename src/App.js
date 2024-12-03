import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyList from "./components/PropertyList";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5034/Properties")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Property Manager</h1>
      <PropertyList properties={data} />
    </div>
  );
};

export default App;
