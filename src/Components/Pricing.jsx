import React from "react";
import styled from "styled-components";
import greyCheck from "./images/greyCheck.svg";
import greenCheck from "./images/greenCheck.svg";
import yellowCheck from "./images/yellowCheck.svg";

class Pricing extends React.Component {
  render() {
    return (
      <div>
        <Price>
          <h1>Affordable Pricing</h1>
          <h3>Monthly</h3>
        </Price>
        <Container>
          <Forever>
            <FreeTitle>
              <Free>Free</Free>
              <Novice>/ Novice</Novice>
            </FreeTitle>
            <ul>
              <li>
                <GreyChecked src={greyCheck} alt="grey check" />5 Campaigns
              </li>
              <li>
                <GreyChecked src={greyCheck} alt="grey check" />5 Characters
              </li>
              <li>
                <GreyChecked src={greyCheck} alt="grey check" />
                Combat Tracker
              </li>
              <li>
                <GreyChecked src={greyCheck} alt="grey check" />
                Import your own maps
              </li>
              <li>
                <GreyChecked src={greyCheck} alt="grey check" />
                Free Assets pack
              </li>
            </ul>
          </Forever>
          <Editor>
            <FreeTitle>
              <Free>$12</Free>
              <Novice>/ Adept</Novice>
            </FreeTitle>
            <ul>
              <li>
                <GreyChecked src={greenCheck} alt="green check" />
                10 Campaigns
              </li>
              <li>
                <GreyChecked src={greenCheck} alt="green check" />
                Unlimited Characters
              </li>
              <li>
                <GreyChecked src={greenCheck} alt="green check" />
                Combat Tracker
              </li>
              <li>
                <GreyChecked src={greenCheck} alt="green check" />
                Import own maps
              </li>
              <GreenLi>
                <GreyChecked src={greenCheck} alt="green check" />
                Access 100+ assets including music and sound tracks for combat
                and ambiance management
              </GreenLi>
            </ul>
          </Editor>
          <Month>
            <FreeTitle>
              <Free>$24</Free>
              <Novice>/Master</Novice>
            </FreeTitle>
            <ul>
              <li>
                <GreyChecked src={yellowCheck} alt="yellow check" />
                Unlimited Campaigns
              </li>
              <li>
                <GreyChecked src={yellowCheck} alt="yellow check" />
                Unlimited Characters
              </li>
              <li>
                <GreyChecked src={yellowCheck} alt="yellow check" />
                Combat Tracker
              </li>
              <li>
                <GreyChecked src={yellowCheck} alt="yellow check" />
                Import your own maps
              </li>
              <GreenLi>
                <GreyChecked src={yellowCheck} alt="yellow check" />
                Access 100+ assets including music and sound tracks for combat
                and ambiance management
              </GreenLi>
              <GreenLi>
                <GreyChecked src={yellowCheck} alt="yellow check" />
                Monetize your account and start making DMing for parties from
                across the World
              </GreenLi>
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
`;

const Price = styled.div`
  font-size: 2rem;
  text-align: center;
`;

const Forever = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 6px #000;
  width: 30%;
  height: 350px;
  list-style: none;
  line-height: 2rem;
`;

const Editor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 6px #ffe815;
  width: 30%;
  height: 350px;
  list-style: none;
  line-height: 2rem;
`;

const Month = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 6px #000;
  width: 30%;
  height: 400px;
  list-style: none;
  line-height: 2rem;
`;

const Free = styled.div`
  font-size: 1.5rem;
  margin-right: 0.25rem;
  text-transform: uppercase;
`;

const FreeTitle = styled.div`
  display: flex;
  align-items: flex-end;
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
