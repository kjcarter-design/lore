import React from "react";
import styled from "styled-components";
import Hero from "./Hero.jsx";
import RedFlame from "../Components/images/RedFlame.svg";
import Android from "../Components/images/Android.svg";
import Appstore from "../Components/images/Appstore.svg";
import Webapp from "../Components/images/Webapp.svg";

class Menu extends React.Component {
  render() {
    return (
      <Tincan>
        <DiscordFlame>
          <Flame src={RedFlame} alt="red flame" />
          <Discord>Join our Discord</Discord>
        </DiscordFlame>
        <Hero />
        <Locations>
          <Image src={Android} alt="android" />
          <Image src={Appstore} alt="appstore" />
          <Image src={Webapp} alt="webapp" />
        </Locations>
      </Tincan>
    );
  }
}

export default Menu;

const Tincan = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flame = styled.img`
  width: 100vw;
  @media (min-width: 400px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const Discord = styled.p`
  text-align: center;
  color: rgb(255, 255, 255);
  margin-top: -1.75rem;
  @media (min-width: 400px) {
    font-size: 2rem;
    margin-top: -6rem;
  }
`;

const DiscordFlame = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (min-width: 400px) {
    margin-bottom: 6rem;
  }
`;

const Image = styled.img`
  width: 30%;
  margin-top: 2rem;
`;

const Locations = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
