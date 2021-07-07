import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar.jsx";
import devices from "./images/devices.svg";

class Hero extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <img src={devices} alt="Electronic Screens" />
        <Title>The Time has come</Title>
        <button>Try for Free</button>
        <button>Learn More</button>
      </div>
    );
  }
}

export default Hero;

const Title = styled.h1`
  width: 50%;
  text-align: center;
`;
