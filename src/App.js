import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Deals from "./components/Deals";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <div id="menu">
        <Menu />
      </div>

      <div>
        <Deals/>
      </div>
    </>
  );
}

export default App;
