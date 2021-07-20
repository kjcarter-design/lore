import React from "react";
import styled from "styled-components";
import BlueWolf from "./images/mobile-imgs/blue-wolf.svg";
import KeyframesSlides from "./KeyframeSlides";
import { KeyframeSlideData } from "./KeyframeSlideData";
class Keyframes extends React.Component {
  render() {
    return (
      <KeyframeContainer id="Keyframes">
        <KeyframesSlides slides={KeyframeSlideData} />
      </KeyframeContainer>
    );
  }
}

export default Keyframes;

const KeyframeContainer = styled.div`
display: flex;
justify-content: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.07) url(${BlueWolf}) center no-repeat;
  
  @media (min-width:400px){
    width: 100vw;
    height: 60vh;
  }
`;

