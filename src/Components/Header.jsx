import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar.jsx";
import devices from "./images/devices.svg";
import MainImage from "./images/MainImage.svg";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
          <div>
            <img src={devices} alt="Electronic Screens" />
            <Title>The Time has come</Title>
            <Dragon src={MainImage} alt="dragon" />
            <Learn>Learn More</Learn>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

const Title = styled.h1`
  text-align: center;
  z-index: 10;
`;

const Learn = styled.button`
  background: transparent;
  color: #111b47;
  width: 11.5rem;
  height: 2.2rem;
  margin-left: 2rem;
`;

const Dragon = styled.img`
  margin-top: -1rem;
  width: 100%;
  z-index: 1;
`;
