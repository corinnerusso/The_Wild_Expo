import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="nav_ul">
        <Link to="/Principal" style={{ textDecoration: "none" }}>
          <li className="nav_li">Accueil</li>
        </Link>
        <Link to="/Infos" style={{ textDecoration: "none" }}>
          <li className="nav_li">Infos Pratiques</li>
        </Link>
        <Link to="/Form" style={{ textDecoration: "none" }}>
          <li className="nav_li">Réservez</li>
        </Link>
        <Link to="/Admin" style={{ textDecoration: "none" }}>
          <li className="nav_li">Admin</li>
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
