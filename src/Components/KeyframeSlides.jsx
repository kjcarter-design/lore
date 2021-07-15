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
    return;
    <Carousel
    // showArrows={true}
    // onChange={onChange}
    // onClickItem={onClickItem}
    // onClickThumb={onClickThumb}
    >
      <div>
        <img src={Lore1stScreen} alt="Lore" />
      </div>
      <div>
        <img src={Board} alt="Community Board" />
      </div>
      <div>
        <img src={Creator} alt="Character Creator" />
      </div>
      <div>
        <img src={ChAbilities} alt="Character Abilities" />
      </div>
      <div>
        <img src={MapScreen} alt="Map" />
      </div>
    </Carousel>;
  }
}

export default Slides;
