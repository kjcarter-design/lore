import React from "react";
import styled from "styled-components";
import "../App.css";
import greyCheck from "./images/greyCheck.svg";
import greenCheck from "./images/greenCheck.svg";
import yellowCheck from "./images/yellowCheck.svg";

class Pricing extends React.Component {
  render() {
    return (
      <div>
        <Price>
          <h1>Affordable Pricing</h1>
          <Monthly>monthly</Monthly>
        </Price>
        <Container>
          <Forever>
            <FreeTitle>
              <Free>Free</Free>
              <Novice>Novice Package</Novice>
            </FreeTitle>
            <ul>
              <li>
                <GreyChecked src={greyCheck} alt="grey check" />
                Create up to 8 different characters
              </li>
              <li>
                <GreyChecked src={greyCheck} alt="grey check" />
                Create and join campaigns
              </li>
              <li>
                <GreyChecked src={greyCheck} alt="grey check" />
                Access to the battle map and public forums
              </li>
              <button>Try for Free</button>
            </ul>
          </Forever>
          <Editor>
            <FreeTitle>
              <Free>$5/mo</Free>
              <Novice>Adept Package</Novice>
            </FreeTitle>
            <ul>
              <li>
                <GreyChecked src={greenCheck} alt="green check" />
                Access to all novice package perks
              </li>
              <li>
                <GreyChecked src={greenCheck} alt="green check" />
                Create unlimited characters
              </li>
              <li>
                <GreyChecked src={greenCheck} alt="green check" />
                Custom homebrew campaign tool sets
              </li>
              <GreenLi>
                <GreyChecked src={greenCheck} alt="green check" />
                Wider variety of customization for maps and characters
              </GreenLi>
              <GreenLi>
                <GreyChecked src={greenCheck} alt="green check" />
                Access 100+ assets including music and sound tracks for combat
                and ambiance management
              </GreenLi>
            </ul>
          </Editor>
          <Month>
            <FreeTitle>
              <Free>$8/mo</Free>
              <Novice>Master Package</Novice>
            </FreeTitle>
            <ul>
              <li>
                <GreyChecked src={yellowCheck} alt="yellow check" />
                Access to all novice and adept perks
              </li>
              <li>
                <GreyChecked src={yellowCheck} alt="yellow check" />
                Early access to new tools and mechanics
              </li>
              <li>
                <GreyChecked src={yellowCheck} alt="yellow check" />
                Unlimited encounters and monsters
              </li>
              <li>
                <GreyChecked src={yellowCheck} alt="yellow check" />
                Monthly perks and rewards
              </li>
            </ul>
          </Month>
        </Container>
      </div>
    );
  }
}

export default Pricing;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-family: "Roboto", sans-serif;
`;

const Price = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 2rem;
  text-align: center;
`;

const Monthly = styled.h3`
  color: #8251eb;
  font-size: 1.5rem;
`;

const Forever = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
  width: 25%;
  height: 350px;
  list-style: none;
  line-height: 2rem;
`;

const Editor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 6px rgba(255, 232, 21, 0.5);
  width: 25%;
  height: 350px;
  list-style: none;
  line-height: 2rem;
  margin-top: 2rem;
`;

const Month = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
  width: 25%;
  height: 350px;
  list-style: none;
  line-height: 2rem;
`;

const Free = styled.div`
  font-size: 2rem;
  margin-right: 0.25rem;
  text-transform: uppercase;
`;

const FreeTitle = styled.div`
  margin-bottom: 1rem;
`;

const Novice = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
`;

const GreyChecked = styled.img`
  margin-right: 10px;
`;

const GreenLi = styled.li`
  line-height: 1rem;
  width: 90%;
`;
