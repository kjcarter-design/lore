import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar.jsx";
import devices from "./images/devices.svg";
import MainImage from "./images/MainImage.svg";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Navbar />
          <div>
            <Devices src={devices} alt="Electronic Screens" />
            <Title>The Time has come</Title>
            <Dragon src={MainImage} alt="dragon" />
          </div>
        </Container>
      </div>
    );
  }
}

export default Header;

const Container = styled.div`
  position: relative;
`;

const Title = styled.h1`
  position: relative;
  z-index: 2;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 2.5vw;
  text-align: center;
  top: -20rem;
  left: 7rem;
`;

const Dragon = styled.img`
  margin-top: -33%;
  width: 100%;
`;

const Devices = styled.img`
  position: relative;
  z-index: 2;
  width: 50%;
`;
