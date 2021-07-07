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
            <h3>/ Forever</h3>
          </div>
          <ul>
            <li>
              <img src={greyCheck} alt="grey check" />
              Create New Characters
            </li>
            <li>
              <img src={greyCheck} alt="grey check" />
              Manage Character Sheets with Digital Dice
            </li>
            <li>
              <img src={greyCheck} alt="grey check" />
              Use Tools to Organize Your Table
            </li>
          </ul>
        </Forever>
        <Editor>
          <div>
            <h1>$12</h1>
            <h3>/ Discord Bot</h3>
          </div>
          <ul>
            <li>
              <img src={greenRedCheck} alt="green check" />
              Create New Characters
            </li>
            <li>
              <img src={greenCheck} alt="green check" />
              Manage Character Sheets with Digital Dice
            </li>
            <li>
              <img src={greenCheck} alt="green check" />
              Use Tools to Organize Your Table
            </li>
            <li>
              <img src={greenCheck} alt="green check" />
              Play Anywhere with Discord Bot
            </li>
          </ul>
        </Editor>
        <Month>
          <div>
            <h1>$24</h1>
            <h3>/ All Included</h3>
          </div>
          <ul>
            <li>
              <img src={yellowCheck} alt="yellow check" />
              Create New Characters
            </li>
            <li>
              <img src={yellowCheck} alt="yellow check" />
              Manage Character Sheets with Digital Dice
            </li>
            <li>
              <img src={yellowCheck} alt="yellow check" />
              Use Tools to Organize Your Table
            </li>
            <li>
              <img src={yellowCheck} alt="yellow check" />
              Play Anywhere with Discord Bot
            </li>
            <img src={yellowCheck} alt="yellow check" />
            All Platforms to Take Your Campaigns Anywhere
            <li></li>
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
