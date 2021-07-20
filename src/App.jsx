import React from "react";
import "./App.css";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import Pricing from "./Components/Pricing.jsx";
import Menu from "./Components/Menu.jsx";
import Keyframes from "./Components/Keyframes.jsx";
import FAQ from "./Components/FAQ.jsx";
import Registration from "./Components/Registration.jsx";

// import Registration from "./Components/Registration";

// import KeyframesSlides from "./Components/KeyframeSlides.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Keyframes />
      <Pricing />
      <FAQ />
      <Footer />
      {/* <Registration /> */}
    </div>
  );
}

export default App;
