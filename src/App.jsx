import React from "react";
import "./App.css";
import Footer from "./Components/Footer.jsx";
import Hero from "./Components/Hero.jsx";
import Header from "./Components/Header.jsx";
import Pricing from "./Components/Pricing.jsx";
import Menu from "./Components/Menu.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Menu />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
