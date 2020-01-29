import React from "react";
import amo1 from "./../../../style/assets/amo1.jpg";
import daleast1 from "./../../../style/assets/daleast1.jpg";
import marko1 from "./../../../style/assets/marko1.jpg";
import "./center.css";
import { Link } from "react-router-dom";

const Center = () => {
  return (
    <div>
      <h1>Venez découvrir les artistes qui exposent</h1>
      <div className="center_total">
        <div className="center_artist">
          <Link to="/AmoPage" style={{ textDecoration: "none" }}>
            <img
              src={amo1}
              alt="drow of a gorilla"
              className="center_picture"
            />
            <p className="center_name">Amo Art</p>
          </Link>
        </div>

        <div className="center_artist">
          <Link to="/DaleastPage" style={{ textDecoration: "none" }}>
            <img
              src={daleast1}
              alt="drow of a deer"
              className="center_picture"
            />
            <p className="center_name">Daleast</p>
          </Link>
        </div>

        <div className="center_artist">
          <Link to="MarkoPage" style={{ textDecoration: "none" }}>
            <img
              src={marko1}
              alt="drow of a guepard"
              className="center_picture"
            />
            <p className="center_name">Marko 93</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Center;
