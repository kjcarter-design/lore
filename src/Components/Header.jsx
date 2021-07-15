import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar.jsx";
import devices from "./images/Platforms.svg";
import MainImage from "./images/MainImage.svg";
import MainImg from "../Components/images/mobile-imgs/main-mobile.svg";
import LogoWhite from "../Components/images/mobile-imgs/logo-white.svg";

class Header extends React.Component {
  render() {
    return (
      <div>
        <DesktopContainer>
          <DeTiContainer>
            <Devices src={devices} alt="devices" />
            <Title>The Time has come</Title>
          </DeTiContainer>
          <Dragon src={MainImage} alt="dragon" />
        </DesktopContainer>
        <Container>
          {/* <div> */}
          <Logo src={LogoWhite} alt="Lore Logo" />
          <Title>The Time Has Come</Title>
          {/* </div> */}
          {/* <Button>Learn More</Button> */}
        </Container>
        <Navbar />
      </div>
    );
  }
}

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${MainImg}) no-repeat center;
  background-size: contain;
  width: 100%;
  @media (min-width: 400px) {
    display: none;
  }
`;

const DesktopContainer = styled.div`
  display: none;
  @media (min-width: 400px) {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      "devices title ."
      "dragon dragon dragon";
    justify-content: space-around;
    align-content: center;
  }
`;

// const Button = styled.button`
//   display: block;
//   background-color: rgb(255, 255, 255);
//   color: rgb(17, 27, 71);
//   border-radius: 5px;
//   border-style: none;
//   font-size: 5rem;
// `;

const Title = styled.p`
  color: rgb(0, 0, 0);
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  margin-left: 1.7rem;
  margin-bottom: 1rem;
  @media (min-width: 400px) {
    grid-area: title;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 400;
    justify-self: center;
  }
`;

const Logo = styled.img`
  width: 70%;
  margin-top: 7rem;
  margin-right: 4rem;
`;

const Dragon = styled.img`
  grid-area: dragon;
  width: 100%;
  margin-top: -11rem;
  z-index: -1;
`;

const Devices = styled.img`
  grid-area: devices;
  width: 50%;
  justify-self: center;
`;

const DeTiContainer = styled.div`
  display: flex;
  margin-left: 2rem;
  margin-bottom: -10rem;
`;
