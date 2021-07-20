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

const Main = styled.div`
  @media (min-width: 400px) {
    background-color: rgba(0, 0, 0, 0.07);
  }
`;

const DesktopImg = styled.img`
  display: hidden;
  @media (min-width: 400px) {
    grid-area: character;
    display: block;
    width: 35vw;
    align-self: center;
  }
`;

const Container = styled.div`
  margin-top: 2rem;
  background: rgba(0, 0, 0, 0.07) url(${BlueWolf}) no-repeat;
  width: 100vw;
  height: auto;
  margin-bottom: 2rem;
  @media (min-width: 400px) {
    background: none;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "character map map"
      "character join join";
    align-items: center;
  }
`;

const Join = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  text-align: center;
  top: -12rem;
  @media (min-width: 400px) {
    grid-area: join;
    font-size: 3rem;
    margin-top: -15rem;
  }
`;

const Epic = styled.span`
  color: rgb(255, 0, 0);
`;
