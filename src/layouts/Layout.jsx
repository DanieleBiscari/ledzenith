import React from "react";
import { useOutlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import OffcanvasCart from "../components/offcanvas/OffcanvasCart";


const Layout = () => {
  const outlet = useOutlet();

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="py-4 container min-vh-100">{outlet}</main>

      <OffcanvasCart
        id={"offcanvasCart"}
        ariaLabelledby={"offcanvasCartLabel"}
      />

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
