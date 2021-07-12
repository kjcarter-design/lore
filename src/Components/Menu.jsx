import React from "react";
import styled from "styled-components";
<<<<<<< HEAD
import Hero from "./Hero.jsx";
=======
>>>>>>> e8f84c99dcdcdd298617960e8b091ae785893836
import RedFlame from "../Components/images/RedFlame.svg";
import Android from "../Components/images/Android.svg";
import Appstore from "../Components/images/Appstore.svg";
import Webapp from "../Components/images/Webapp.svg";

class Menu extends React.Component {
  render() {
    return (
      <Tincan>
<<<<<<< HEAD
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
=======
        <img src={RedFlame} alt="red flame" />
        <div>
          <img src={Android} alt="android" class="fakeimg" />
          <img src={Appstore} alt="appstore" class="fakeimg" />
          <img src={Webapp} alt="webapp" class="fakeimg" />
        </div>
>>>>>>> e8f84c99dcdcdd298617960e8b091ae785893836
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
<<<<<<< HEAD
  width: 100vw;
`;

const Discord = styled.p`
  text-align: center;
  color: rgb(255, 255, 255);
  margin-top: -1.75rem;
`;

const DiscordFlame = styled.div`
  display: inline-block;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const Image = styled.img`
  width: 30%;
  margin-top: 2rem;
`;

const Locations = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
=======
  text-align: center;
  margin-left: 40rem;
`;

const Fakeimage = styled.img`
  background-color: #aaa;
  width: 100%;
  padding: 1px;
`;

// const Loreloactions = styled.img`
//   display: flex;
//   width: 100%;
//   padding-left: 2rem;
//   justify-content: center;
//   min-height: 5vh;
//   align-items: center;
// `;
>>>>>>> e8f84c99dcdcdd298617960e8b091ae785893836
