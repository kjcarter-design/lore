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

const Video = styled.iframe`
  box-shadow: 1px 5px 6px rgba(0, 0, 0, 0.25);
  border: transparent;
  width: 90%;
  margin-left: 1rem;
  @media (min-width: 400px) {
    width: 400px;
    height: 300px;
  }
`;

const Container = styled.div`
  background-color: rgb(253, 251, 251);
  @media (min-width: 400px) {
    display: flex;
    align-items: center;
  }
`;
