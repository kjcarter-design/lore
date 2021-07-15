import React from "react";
import "./App.css";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import Pricing from "./Components/Pricing.jsx";
import Menu from "./Components/Menu.jsx";
import Keyframes from "./Components/Keyframes.jsx";
import Faq from "./Components/FAQ.jsx";
// import KeyframesSlides from "./Components/KeyframeSlides.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Keyframes />
      <Pricing />
      <Faq />
      <Footer />
      {/* <KeyframesSlides /> */}
    </div>
  );
}

export default App;
