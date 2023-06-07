import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <p className="text-center mt-3">
        <Link to="/about">Про нас</Link>
        |
        <Link to="/contact">Контакти</Link>
      </p>
    </div>
  );
};

export default Footer;
