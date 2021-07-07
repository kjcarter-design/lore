import React from "react";
import "./App.css";
import Footer from "./Components/Footer.jsx";
import Hero from "./Components/Hero.jsx";
import Header from "./Components/Header.jsx";
import Pricing from "./Components/Pricing.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
