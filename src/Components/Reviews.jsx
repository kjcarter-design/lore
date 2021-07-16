import React from "react";
// import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

class Reviews extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Review>
            <p>
              "Lore brings the fight to your fingers. Fight with legends and
              explore new lands. Each quest requires speed, knowledge but most
              importantly it requires heart."
            </p>
            <p> &#8213; John Smith</p>
          </Review>
          <Review>
            <p>
              "Lore brings the fight to your fingers. Fight with legends and
              explore new lands. Each quest requires speed, knowledge but most
              importantly it requires heart."
            </p>
            <p> &#8213; John Smith</p>
          </Review>
          <Arrows onclick="plusSlides(-1)">&#10094;</Arrows>
          <Arrows onclick="plusSlides(1)">&#10095;</Arrows>
        </Container>
        <div>
          <Dots onclick="currentSlide(1)"></Dots>
          <Dots onclick="currentSlide(2)"></Dots>
          <Dots onclick="currentSlide(3)"></Dots>
        </div>
      </div>
    );
  }
}

export default Reviews;

const Container = styled.div`
  width: 60vw;
`;

const Review = styled.div`
  display: block;
`;

const Arrows = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: --22px;
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
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

  :hover {
    background-color: rgb(113, 113, 113);
  }
`;
