import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar.jsx";
import devices from "./images/devices.svg";
import MainImage from "./images/MainImage.svg";
import MainImg from "../Components/images/mobile-imgs/main-mobile.svg";
import LogoWhite from "../Components/images/mobile-imgs/logo-white.svg";

class Header extends React.Component {
  render() {
    return (
      <div>
        <DesktopContainer>
          <Title>The Time has come</Title>
          <Devices src={devices} alt="Electronic Screens" />
          <Dragon src={MainImage} alt="dragon" />
        </DesktopContainer>
        <Container>
          <WordContainer>
            <Logo src={LogoWhite} alt="Lore Logo" />
            <Title>The Time Has Come</Title>
          </WordContainer>
          <Button>Learn More</Button>
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
    display: block;
    position: relative;
  }
`;

const Button = styled.button`
  display: block;
  background-color: rgb(255, 255, 255);
  color: rgb(17, 27, 71);
  border-radius: 5px;
  border-style: none;
  font-size: 5rem;
`;

const Title = styled.p`
  color: rgb(0, 0, 0);
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  margin-left: 1.7rem;
  margin-bottom: 1rem;
  @media (min-width: 400px) {
    text-align: center;
    font-size: 4rem;
    font-weight: 400;
    position: relative;
    top: 5rem;
  }
`;

const WordContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 3rem;
`;

const Logo = styled.img`
  width: 70%;
  margin-top: 7rem;
  margin-right: 4rem;
`;

const Dragon = styled.img`
  margin-top: -35%;
  width: 100%;
`;

const Devices = styled.img`
  position: relative;
  z-index: 2;
  width: 50%;
  top: 7rem;
`;
