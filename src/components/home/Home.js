import React from "react";
import { NavLink } from "react-router-dom";
import chapiteau from "./../../style/assets/chapiteau.png";

const Home = () => {
  return (
    <div className="home_title">
      <img src={chapiteau} alt="chapiteau" className="home_image" />
      <NavLink exact to="/Principal">
        <div className="home_button">Entrez sous le chapiteau</div>
      </NavLink>
    </div>
  );
};

export default Home;
