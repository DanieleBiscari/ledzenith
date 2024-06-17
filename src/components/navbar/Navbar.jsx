import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import Logo from "../Logo";
import Searchbar from "../searchbar/Searchbar";
import Cart from "../icons/Cart";

const Navbar = () => {
  const [luciList, setLuciList] = useState([]);
  const [offerteList, setOfferteList] = useState([]);

  useEffect(() => {
    setLuciList([
      { name: "led", link: "/led" },
      { name: "led", link: "/led" },
      { name: "led", link: "/led" },
    ]);

    setOfferteList([
      { name: "led", link: "/led" },
      { name: "led", link: "/led" },
      { name: "led", link: "/led" },
    ]);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-primary position-fixed w-100">
      <div className="container-fluid">
        <div
          className={
            "z-0 d-none d-lg-inline position-absolute text-center w-100"
          }
        >
          <Logo />
        </div>
        <div className="d-inline d-lg-none">
          <Logo />
        </div>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse py-2 py-lg-0 px-lg-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-5">
            <Dropdown name={"Le nostre luci"} elements={luciList} />
            <Dropdown name={"Offerte"} elements={offerteList} />
            <li className="nav-item z-2">
              <Link className="nav-link outline-ring" to="#news">
                News
              </Link>
            </li>
          </ul>

          <div className="d-flex justify-content-between gap-4">
            <Searchbar />
            <Cart />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
