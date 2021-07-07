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
        <Free>Try for Free</Free>
        <Learn>Learn More</Learn>
      </div>
    );
  }
}

export default Hero;

const Title = styled.h1`
  width: 50%;
  text-align: center;
`;

const Free = styled.button`
  background-color: #111b47;
  color: #fff;
  width: 11.5rem;
  height: 2.2rem;
  margin-left: 10rem;
`;

const Learn = styled.button`
  background: transparent;
  color: #111b47;
  width: 11.5rem;
  height: 2.2rem;
  margin-left: 2rem;
`;
