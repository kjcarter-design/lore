import React from "react";
import styled from "styled-components";
import greyCheck from "./images/greyCheck.svg";
import greenRedCheck from "./images/greenRedCheck.svg";
import greenCheck from "./images/greenCheck.svg";
import yellowCheck from "./images/yellowCheck.svg";

class Pricing extends React.Component {
  render() {
    return (
      <div>
        <>
          <h1>Affordable Pricing</h1>
          <h3>Billed Monthly</h3>
        </>
        <Forever>
          <div>
            <h1>Free</h1>
            <h3>/ Novice</h3>
          </div>
          <ul>
            <li>
              <img src={greyCheck} alt="grey check" />5 Campaigns
            </li>
            <li>
              <img src={greyCheck} alt="grey check" />5 Characters
            </li>
            <li>
              <img src={greyCheck} alt="grey check" />
              Combat Tracker
            </li>
            <li>
              <img src={greyCheck} alt="grey check" />
              Import your own maps
            </li>
            <li>
              <img src={greyCheck} alt="grey check" />
              Free Assets pack
            </li>
          </ul>
        </Forever>
        <Editor>
          <div>
            <h1>$12</h1>
            <h3>/ Adept</h3>
          </div>
          <ul>
            <li>
              <img src={greenRedCheck} alt="green check" />
              10 Campaigns
            </li>
            <li>
              <img src={greenCheck} alt="green check" />
              Unlimited Characters
            </li>
            <li>
              <img src={greenCheck} alt="green check" />
              Combat Tracker
            </li>
            <li>
              <img src={greenCheck} alt="green check" />
              Import own maps
            </li>
            <li>
              <img src={greenCheck} alt="green check" />
              Access 100+ assets including music and sound tracks for combat and
              ambiance management
            </li>
          </ul>
        </Editor>
        <Month>
          <div>
            <h1>$24</h1>
            <h3>/Master</h3>
          </div>
          <ul>
            <li>
              <img src={yellowCheck} alt="yellow check" />
              Unlimited Campaigns
            </li>
            <li>
              <img src={yellowCheck} alt="yellow check" />
              Unlimited Characters
            </li>
            <li>
              <img src={yellowCheck} alt="yellow check" />
              Combat Tracker
            </li>
            <li>
              <img src={yellowCheck} alt="yellow check" />
              Import your own maps
            </li>
            <li>
              <img src={yellowCheck} alt="yellow check" />
              Access 100+ assets including music and sound tracks for combat and
              ambiance management
            </li>
            <li>
              <img src={yellowCheck} alt="yellow check" />
              Monetize your account and start making DMing for parties from
              across the World
            </li>
          </ul>
        </Month>
      </div>
    );
  }
}

export default Pricing;

const Forever = styled.div`
  display: flex;
  flex-direction: column;
`;

const Editor = styled.div`
  display: flex;
  flex-direction: column;
`;

const Month = styled.div`
  display: flex;
  flex-direction: column;
`;
