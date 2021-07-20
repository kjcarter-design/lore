import React from "react";
import styled from "styled-components";
import BlueWolf from "./images/mobile-imgs/blue-wolf.svg";
import BattleMap from "./images/Battle-Map.png";
import MainScreen from "./images/Main-Screen.png";
import CharacterSelector from "./images/Character-Selector.png";
import CharacterSheet from "./images/Character-Sheet.png";
import CommunityBoard from "./images/Community-Board.png";

class Keyframes extends React.Component {
  render() {
    return (
      <Main id="keyframes">
        <Container>
          <DesktopImg src={BlueWolf} alt="Blue Wolf" />
          <MainContainer>
            <MainImg src={MainScreen} alt="Main Screen" />
            <MainText>
              <block>
                Jump right into the game by creating your own campaign world,
                favorite new character or dynamic battle map!
              </block>
            </MainText>
          </MainContainer>
          <SelectorContainer>
            <SelectorImg src={CharacterSelector} alt="Character Selector" />
            <MainText>
              <block>
                Create, edit, and assemble all your incredible heroes. Even
                share your favorites with friends!
              </block>
            </MainText>
          </SelectorContainer>
          <SheetContainer>
            <SheetImg src={CharacterSheet} alt="Character Abilities" />
            <MainText>
              <block>
                View all of character's stats, abilities, and feats. Edit and
                tweak them until your hearts content!
              </block>
            </MainText>
          </SheetContainer>
          <MapContainer>
            <MapImg src={BattleMap} alt="Battle Map" />
            <MapText>
              <block>
                Implement the maps you create with our dynamic battle map. Share
                your favorites with the community also!
              </block>
            </MapText>
          </MapContainer>
          <CommunityContainer>
            <CommunityImg src={CommunityBoard} alt="Community" />
            <MainText>
              <block>
                See what the community is up to and share your thoughts. Meet up
                with new players looking to join your epic quest!
              </block>
            </MainText>
          </CommunityContainer>

          <Join>
            Join <Epic>Epic</Epic> Battles
          </Join>
        </Container>
      </Main>
    );
  }
}

export default Keyframes;

const Main = styled.div`
  @media (min-width: 400px) {
    background-color: rgba(0, 0, 0, 0.07);
  }
`;

const DesktopImg = styled.img`
  display: hidden;
  @media (min-width: 400px) {
    width: 30vw;
    align-self: center;
    margin-top: 100rem;
  }
`;

const Container = styled.div`
  margin-top: 2rem;
  background: rgba(0, 0, 0, 0.07) url(${BlueWolf}) no-repeat;
  width: 80vw;
  height: auto;
  margin-bottom: 2rem;
  @media (min-width: 400px) {
    background: none;
    height: auto;
    display: grid;
    grid-template-columns: 20% 40% 40%;
    grid-template-rows: 30% 30% 30%;
    gap: 0px 0px;
    grid-template-areas:
      ". Main Selector"
      ".  Map Join"
      ". Sheet Community ";
  }
`;

const Join = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  text-align: center;
  top: -12rem;
  @media (min-width: 400px) {
    grid-area: Join;
    margin-top: 100rem;
    margin-left: -40rem;
    font-size: 5rem;
  }
`;

const Epic = styled.span`
  color: rgb(255, 0, 0);
`;

const MainContainer = styled.div`
  grid-area: Main;
  margin-top: 5rem;
`;

const MainImg = styled.img`
  width: 50%;
  margin-left: 30rem;
`;

const MainText = styled.p`
  width: 40%;
  margin-left: 32rem;
  margin-top: 2rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
`;

const MapText = styled.p`
  width: 80%;
  margin-left: 50rem;
  margin-top: 2rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
`;

const SelectorContainer = styled.div`
  grid-area: Selector;
  margin-top: 5rem;
`;
const SelectorImg = styled.img`
  width: 50%;
  margin-left: 30rem;
`;

const SheetContainer = styled.div`
  grid-area: Sheet;
`;
const SheetImg = styled.img`
  width: 50%;
  margin-left: 30rem;
  margin-top: -45rem;
`;

const MapContainer = styled.div`
  grid-area: Map;
  margin-top: -10rem;
`;
const MapImg = styled.img`
  margin-left: 30rem;
`;

const CommunityContainer = styled.div`
  grid-area: Community;
  margin
`;
const CommunityImg = styled.img`
  width: 50%;
  margin-left: 30rem;
  margin-top: -45rem;
`;
