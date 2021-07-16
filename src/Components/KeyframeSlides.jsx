import React from "react";
import styled from "styled-components";
import CharacterSheet from "./images/Character-Sheet.png";
import CharacterSelector from "./images/Character-Selector.png";
import Board from "./images/Community-Board.png";
import Lore1stScreen from "./images/Main-Screen.png";
import MapScreen from "./images/Battle-Map.png";

class Slides extends React.Component {
  state = {
    currentSlideIndex: 0,
  };

  slideData = [
    {
      img: Lore1stScreen,
      altTxt: "Lore",
    },
    {
      img: Board,
      altTxt: "Community Board",
    },
    {
      img: CharacterSelector,
      altTxt: "Character Selector",
    },
    {
      img: CharacterSheet,
      altTxt: "Character Abilities",
    },
    {
      img: MapScreen,
      altTxt: "Battle Map",
    },
  ];

  render() {
    return (
      <div id="Slide">
        <ArrowLeft onClick="plusSlides(-1)"> &#x291F;</ArrowLeft>
        {this.slideData.map((slide, i) => (
          <Slide
            key={"slide" + i}
            src={slide.img}
            alt={slide.altTxt}
            isCurrentSlide={this.state.currentSlideIndex === i}
          />
        ))}

        <ArrowRight onClick="plusSlides(1)"> &#x2920;</ArrowRight>

        <div>
          {this.slideData.map((_, i) => (
            <Dots
              key={"dot" + i}
              onClick={() => this.setState({ currentSlideIndex: i })}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Slides;

const Slide = styled.img`
  width: max-content;
  height: max-content;
  margin: 2rem;
  display: ${(props) => (props.isCurrentSlide ? "block" : "hidden")};
`;

const ArrowLeft = styled.a`
  cursor: pointer;
  margin-top: 5rem;
  width: auto;
  color: rgb(130, 81, 235);
  font-weight: bold;
  font-size: 3rem;
  transition: 0.6s ease;

  user-select: none;

  :hover {
    background-color: rgba(0, 0, 0, 0.8);
    height: 3.5rem;
    border-radius: 0 3px 3px 0;
  }
`;

const ArrowRight = styled.a`
  cursor: pointer;
  margin-top: 5rem;
  width: auto;
  color: rgb(130, 81, 235);
  font-weight: bold;
  font-size: 3rem;
  transition: 0.6s ease;
  user-select: none;

  :hover {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 0 3px 3px 0;
    height: 3.5rem;
  }
`;

const Dots = styled.span`
  cursor: pointer;
  height: 1rem;
  width: 1rem;
  margin-left: 4.8rem;
  margin-top: 1rem;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

  :hover {
    background-color: rgb(113, 113, 113);
  }
`;
