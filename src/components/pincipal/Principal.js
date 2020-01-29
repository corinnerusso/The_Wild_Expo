import React from "react";
import NavBar from "./childComponents/NavBar";
import Center from "./childComponents/Center";
import Footer from "./childComponents/Footer";
import "./principal.css";
const Principal = () => {
  return (
    <div className="principal">
      <NavBar />
      <Center />
      <Footer />
    </div>
  );
};

export default Principal;
