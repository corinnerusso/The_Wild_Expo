import React from "react";
import "./location.css";

const Location = () => {
  return (
    <div>
      <h1 className="location_title">Où nous trouver</h1>
      <div className="location_text">
        <p>The Wild Exposition</p>
        <p>18 rue Gambetta</p>
        <p>33000 BORDEAUX</p>
        <p>Tel : 07 07 07 07 07</p>
        <a
          href="https://goo.gl/maps/puaVmB2BKBdUvb8z7"
          className="location-map"
          style={{ textDecoration: "none" }}
        >
          Nous situer
        </a>
      </div>
    </div>
  );
};

export default Location;
