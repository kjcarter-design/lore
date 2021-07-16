import React from "react";
import styled from "styled-components";
import Reviews from "./Reviews.jsx";

class Hero extends React.Component {
  render() {
    return (
      <Container>
        <Video
          width="455"
          height="256"
          src="https://www.youtube.com/embed/6X7qvZvhXRo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Video>
        <Reviews />
      </Container>
    );
  }
}

export default Hero;

const Container = styled.div`
  background: rgba(150, 150, 150, 0.2);
  margin-top: 2rem;
  @media (min-width: 400px) {
    display: flex;
    align-items: center;
  }
`;

const Video = styled.iframe`
  box-shadow: 1px 5px 6px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  width: 90%;
  margin-left: 1rem;
  position: relative;
  top: -2rem;
  @media (min-width: 400px) {
    position: relative;
    top: -2rem;
    width: 636.19px;
    height: 408px;
  }
`;
