import React from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import ChAbilities from "./images/CharacterAbilities.svg";
import Creator from "./images/CharacterCreator.svg";
import Board from "./images/CommunityBoard.svg";
import Lore1stScreen from "./images/Lore1stScreen.svg";
import MapScreen from "./images/mobile-imgs/map-screen.svg";

class Slides extends React.Component {
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

  render() {
    return;
    <CarouselContainer>
    <Carousel>
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
    </CarouselContainer>
  }
}

export default Slides;

const CarouselContainer = styled.div`
max-width: 60%;`

const MapScreen = styled.div`
`
