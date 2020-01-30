import React from "react";
import { NavLink } from "react-router-dom";
import chapiteau from "./../../style/assets/chapiteau.jpg";
import "./home.css";

const Home = () => {
  return (
    <div className="home_title">
      <div className="home_bk">
        <img src={chapiteau} alt="chapiteau" className="home_image" />
      </div>
      <div className="home_click">
        <NavLink style={{ textDecoration: "none" }} exact to="/Principal">
          <p className="home_button">Entrez sous le chapiteau</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
