import React from "react";
import amo1 from "./../../../style/assets/amo1.jpg";
import daleast1 from "./../../../style/assets/daleast1.jpg";
import marko1 from "./../../../style/assets/marko1.jpg";
import "./center.css";
const Center = () => {
  return (
    <div>
      <h1>Venez découvrir nos artistes</h1>
      <div className="center_total">
        <div className="center_artist">
          <img src={amo1} alt="drow of a gorilla" className="center_picture" />
          <p>Amo Art</p>
        </div>

        <div className="center_artist">
          <img src={daleast1} alt="drow of a deer" className="center_picture" />
          <p>Daleast</p>
        </div>

        <div className="center_artist">
          <img
            src={marko1}
            alt="drow of a guepard"
            className="center_picture"
          />
          <p>Marko 93</p>
        </div>
      </div>
    </div>
  );
};

export default Center;
