import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar.jsx";
// import devices from "./images/devices.svg";
// import MainImage from "./images/MainImage.svg";
import MainImg from "../Components/images/mobile-imgs/main-mobile.svg";
import LogoWhite from "../Components/images/mobile-imgs/logo-white.svg";

class Header extends React.Component {
  render() {
    return (
      <Container>
        {/* <Container>
          <div>
            <Devices src={devices} alt="Electronic Screens" />
            <Title>The Time has come</Title>
            <Dragon src={MainImage} alt="dragon" />
          </div>
        </Container> */}
        <WordContainer>
          <Logo src={LogoWhite} alt="Lore Logo" />
          <Title>The Time Has Come</Title>
        </WordContainer>
        <Button>Learn More</Button>
        <Navbar />
      </Container>
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
`;

const Button = styled.button`
  background-color: rgb(255, 255, 255);
  color: rgb(17, 27, 71);
  border-radius: 5px;
  border-style: none;
`;

const Title = styled.p`
  color: rgb(255, 255, 255);
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  margin-left: 1.7rem;
  margin-bottom: 1rem;
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

// const Container = styled.div`;
//   position: relative;
// `;

// const Title = styled.h1`
//   position: relative;
//   z-index: 2;
//   font-family: "Roboto", sans-serif;
//   font-weight: 700;
//   font-size: 2.5vw;
//   text-align: center;
//   top: -20rem;
//   left: 7rem;
// `;

// const Dragon = styled.img`
//   margin-top: -33%;
//   width: 100%;
// `;

// const Devices = styled.img`
//   position: relative;
//   z-index: 2;
//   width: 50%;
// `;
