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
          <DeTitle>
            <DeTitleAssets>
              <Devices src={devices} alt="Electronic Screens" />
              <TitleButtons>
                <SignUp>Try For Free</SignUp>
                <Button>Learn More</Button>
              </TitleButtons>
            </DeTitleAssets>
            <DeTitleText>The Time has come</DeTitleText>
          </DeTitle>

          <Navbar />
        </DesktopContainer>

        <Container>
          <Title>
            <img src={LogoWhite} alt="Lore Logo" />
            <TitleTxt>The Time Has Come</TitleTxt>
            <Button>Learn More</Button>
          </Title>
          <Navbar />
        </Container>
      </div>
    );
  }
}

export default Header;

const Container = styled.div`
  display: grid;
  grid-template-rows: 3fr 0.5fr;
  grid-template-areas:
    "title"
    "navbar";
  height: 50vh;
  width: 100%;
  @media (min-width: 400px) {
    display: none;
  }
`;

const Title = styled.div`
  grid-area: title;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: url(${MainImg}) no-repeat center;
  background-size: cover;
`;

const TitleTxt = styled.div`
  justify-self: center;
  margin-left: 3.2rem;
  font-size: 1rem;
  color: white;
`;

const Button = styled.button`
  margin-top: 0.5rem;
  margin-left: 5rem;
  background-color: rgb(255, 255, 255);
  color: rgb(17, 27, 71);
  border-radius: 5px;
  border: solid 1px rgb(17, 27, 71);
  font-size: 1rem;
  padding: 0.5rem;
  @media (min-width: 400px) {
    margin: 0, 0, 0, 1rem;
    font-size: 1.5rem;
  }
`;

//desktop styles

const DesktopContainer = styled.div`
  display: none;
  @media (min-width: 400px) {
    display: grid;
    grid-template-rows: 1fr 0.1fr;
    grid-template-areas:
      "title"
      "navbar";
  }
`;

const DeTitle = styled.div`
  grid-area: title;
  display: flex;
  flex-direction: row;
  background: url(${MainImage}) no-repeat center;
  background-size: cover;
  height: 80vh;
  width: 100%;
`;

const DeTitleAssets = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  width: 40%;
  margin-left: 4rem;
`;

const DeTitleText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  grid-area: title-text;
  font-size: 2.5rem;
  margin-top: 4rem;
`;

const TitleButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

const SignUp = styled.button`
  font-family: "Roboto", sans-serif;
  background-color: #111b47;
  color: #fff;
  padding: 0.5rem;
  align-self: flex-end;
  width: max-content;
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;
`;

const Devices = styled.img`
  z-index: 2;
  top: 7rem;
`;
