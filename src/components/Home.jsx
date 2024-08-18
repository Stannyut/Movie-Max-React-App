import React from "react";
import Navbar from "./Navbar";
import Discover from "./Discover";
import Tv from "./Tv";

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
