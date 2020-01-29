import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="nav_ul">
        <Link to="/Principal">
          <li className="nav_li">Accueil</li>
        </Link>
        <Link to="/Infos">
          <li className="nav_li">Infos Pratiques</li>
        </Link>
        <Link to="/Form">
          <li className="nav_li">Réservez</li>
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
