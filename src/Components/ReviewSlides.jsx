import React from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

class ReviewSlides extends React.Component {
  render() {
    return (
      <Carousel>
        <p>
          "Lore brings the fight to your fingers. Fight with legends and explore
          new lands. Each quest requires speed, knowledge but most importantly
          it requires heart."
        </p>
        <p> --&nbsp; John Smith</p>
        <p>
          "Lore brings the fight to your fingers. Fight with legends and explore
          new lands. Each quest requires speed, knowledge but most importantly
          it requires heart."
        </p>
        <p> --&nbsp; John Smith</p>
      </Carousel>
    );
  }
}

export default ReviewSlides;
