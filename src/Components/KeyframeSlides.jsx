import React from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import ChAbilities from "./images/CharacterAbilities.svg";
import Creator from "./images/CharacterCreator.svg";
import Board from "./images/CommunityBoard.svg";
import Lore1stScreen from "./images/Lore1stScreen.svg";
import MapScreen from "./images/mobile-imgs/map-screen.svg";

class Slides extends React.Component {
  render() {
    return (
      <Container>
        <Carousel>
          <div>
            <Slide src={Lore1stScreen} alt="Lore" />
          </div>
          <div>
            <Slide src={Board} alt="Community Board" />
          </div>
          <div>
            <Slide src={Creator} alt="Character Creator" />
          </div>
          <div>
            <Slide src={ChAbilities} alt="Character Abilities" />
          </div>
          <div>
            <Slide src={MapScreen} alt="Map" />
          </div>
        </Carousel>
      </Container>
    );
  }
}

export default Slides;

const Slide = styled.img`
  width: 30%;
`;

const Container = styled.div`
  width: 60%;
`;
