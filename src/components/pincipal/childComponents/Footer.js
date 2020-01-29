import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_ul">
      <p className="footer_li a">Site réalisé par Corinne RUSSO</p>
      <a href="https://github.com/corinnerusso/" className="footer_li">
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/corinne-russo/"
        className="footer_li"
      >
        Linkedin
      </a>
    </div>
  );
};
export default Footer;
