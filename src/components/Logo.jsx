import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="text-decoration-none text-dark" to="/">
         <span className="h3">LedZenith</span>
    </Link>
  );
};

export default Logo;
