import React from "react";
import styled from "styled-components";
import BlueWolf from "./images/mobile-imgs/blue-wolf.svg";
import MapScreen from "./images/mobile-imgs/map-screen.svg";

class Keyframes extends React.Component {
  render() {
    return (
      <Main>
        <Container>
          <DesktopImg src={BlueWolf} alt="Blue Wolf" />
          <div>
            <Map src={MapScreen} alt="Map Screen" />
            <Join>
              Join <Epic>Epic</Epic> Battles
            </Join>
          </div>
        </Container>
      </Main>
    );
  }
}

export default Keyframes;

const Main = styled.div`
  @media (min-width: 400px) {
    display: flex;
    justify-content: space-evenly;
    background-color: rgba(0, 0, 0, 0.07);
  }
`;

const DesktopImg = styled.img`
  display: hidden;
  @media (min-width: 400px) {
    display: block;
    width: 35vw;
    position: relative;
    top: -7rem;
  }
`;

const Map = styled.img`
  width: 90%;
  margin: auto;
  position: relative;
  top: -16rem;
  left: 1rem;
  @media (min-width: 400px) {
    top: 2rem;
    left: 0;
    margin-right: 0.5rem;
    width: 60vw;
  }
`;

const Container = styled.div`
  margin-top: 2rem;
  background: rgba(0, 0, 0, 0.07) url(${BlueWolf}) no-repeat;
  width: 100vw;
  height: 60vh;
  position: relative;
  margin-bottom: 2rem;
  @media (min-width: 400px) {
    background: none;
    height: 70vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Join = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  text-align: center;
  position: relative;
  top: -12rem;
  @media (min-width: 400px) {
    font-size: 3rem;
    position: relative;
    top: 3rem;
  }
`;

const Epic = styled.span`
  color: rgb(255, 0, 0);
`;
