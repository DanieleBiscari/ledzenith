import React from 'react'
import { useOutlet } from 'react-router-dom'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Layout = () => {
  const outlet = useOutlet();

  return (
    <>
      <header>
        <Navbar/>
      </header>

      <main className="py-4 container min-vh-100">{outlet}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout