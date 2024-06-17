import React from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({name, elements}) => {
  return (
    <div className="dropdown">
      <span
        className="nav-link dropdown-toggle outline-ring"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {name}
      </span>

      <ul className="dropdown-menu">
        {elements.map((el, index) => (
            <li key={index + el.name}>
                <NavLink className="dropdown-item" to={el.link}>
                    {el.name}
                </NavLink>
            </li>
        ))}
        
        {/* <li>
          <hr className="dropdown-divider" />
        </li> */}
      </ul>
    </div>
  );
};

export default Dropdown;
