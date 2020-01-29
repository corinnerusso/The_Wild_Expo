import React from "react";
import NavBar from "./../pincipal/childComponents/NavBar";
import Footer from "./../pincipal/childComponents/Footer";
import Table from "./childComponenents/Table";
import Location from "./childComponenents/Location";

import "./infos.css";

const Infos = () => {
  return (
    <div>
      <NavBar />
      <Table />
      <Location />
      <Footer />
    </div>
  );
};

export default Infos;
