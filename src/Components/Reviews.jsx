import React from "react";
// import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

class Reviews extends React.Component {
  render() {
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
    return (
      <div>
        <Container>
          {this.slideData.map((slide, i) => (
            <Slide
              key={"slide" + i}
              src={slide.img}
              alt={slide.altTxt}
              isCurrentSlide={this.state.currentSlideIndex === i}
            />
          ))}
          <ArrowLeft onClick="plusSlides(-1)"> &#x291F;</ArrowLeft>
          <ArrowRight onClick="plusSlides(1)"> &#x2920;</ArrowRight>
        </Container>

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

export default Reviews;

const Slide = styled.img`
  width: 60%;
  display: ${(props) => (props.isCurrentSlide ? "block" : "hidden")};
`;

const Container = styled.div`
  display: flex;
  width: 60%;
  height: auto;
  padding: 1rem;
  border: 5px ridge rgb(17, 27, 71);
`;

const ArrowLeft = styled.a`
  cursor: pointer;
  margin-top: 5rem;
  width: auto;
  /* margin-top: -22px; */
  /* padding: 16px; */
  color: rgb(130, 81, 235);
  font-weight: bold;
  font-size: 1.25rem;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;

  :hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const ArrowRight = styled.a`
  cursor: pointer;
  margin-top: 5rem;
  width: auto;
  margin-top: -15px;
  padding: 16px;
  color: rgb(130, 81, 235);
  font-weight: bold;
  font-size: 1.25rem;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;

  :hover {
    background-color: rgba(0, 0, 0, 0.8);
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
