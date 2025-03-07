import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Deals from "./components/Deals";
import SpecialMenu from "./components/SpecialMenu";
import Review from "./components/Review";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <div id="menu">
        <Menu />
      </div>

      <div id="deals">
        <Deals/>
      </div>
        
      <div id="special">
       <SpecialMenu/>
      </div>

      <div id="review">
       <Review/>
      </div>
    </>
  );
}

export default App;
