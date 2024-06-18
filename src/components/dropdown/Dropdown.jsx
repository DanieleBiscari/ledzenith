import React from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({name, elements}) => {
  return (
    <li className="dropdown">
      <span
        className="nav-link dropdown-toggle outline-ring"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {name}
      </span>

      <ul id="navbar-dropdown" className="dropdown-menu">
        {elements.map((el, index) => (
            <li key={index + el.name}>
                <NavLink className="dropdown-item" to={el.link}>
                    {el.name}
                </NavLink>
            </li>
        ))}
      </ul>
    </li>
  );
};

export default Dropdown;
