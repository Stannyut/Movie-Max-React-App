import React from "react";
import Navbar from "./components/Navbar";
import Discover from "./components/Discover";
import Tv from "./components/Tv";

function Home() {
  const containerStyle = {
    backgroundColor: "#333",
    padding: "20px",
    borderRadius: "10px",
  };
  return (
    <div style={containerStyle}>
      <Navbar />
      <Discover />
      <Tv />
    </div>
  );
}

export default Home;
