import React from "react";
import styled from "styled-components";
import BlueWolf from "./images/mobile-imgs/blue-wolf.svg";
import MapScreen from "./images/mobile-imgs/map-screen.svg";

class Keyframes extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Map src={MapScreen} alt="Map Screen" />
          <Join>
            Join <Epic>Epic</Epic> Battles
          </Join>
        </Container>
      </div>
    );
  }
}

export default Keyframes;

const Map = styled.img`
  width: 90%;
  margin: auto;
  position: absolute;
  top: 13rem;
  left: 1rem;
`;

const Container = styled.div`
  margin-top: 2rem;
  background: rgba(0, 0, 0, 0.07) url(${BlueWolf}) no-repeat;
  width: 100vw;
  height: 60vh;
  position: relative;
  margin-bottom: 2rem;
`;

const Join = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  text-align: center;
  position: relative;
  top: 27rem;
`;

const Epic = styled.span`
  color: rgb(255, 0, 0);
`;
