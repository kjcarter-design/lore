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
              Components-driven system
            </li>
            <li>
              <img src={greyCheck} alt="grey check" />
              Sales-boosting landing pages
            </li>
            <li>
              <img src={greyCheck} alt="grey check" />
              Awesome Feather icons pack
            </li>
          </ul>
        </Forever>
        <Editor>
          <div>
            <h1>$12</h1>
            <h3>/ Editor</h3>
          </div>
          <ul>
            <li>
              <img src={greenRedCheck} alt="green check" />
              Components-driven system
            </li>
            <li>
              <img src={greenCheck} alt="green check" />
              Sales-boosting landing pages
            </li>
            <li>
              <img src={greenCheck} alt="green check" />
              Awesome Feather icons pack
            </li>
            <li>
              <img src={greenCheck} alt="green check" />
              Themed into 3 different styles
            </li>
          </ul>
        </Editor>
        <Month>
          <div>
            <h1>$24</h1>
            <h3>/ Month</h3>
          </div>
          <ul>
            <li>
              <img src={yellowCheck} alt="yellow check" />
              Components-driven system
            </li>
            <li>
              <img src={yellowCheck} alt="yellow check" />
              Sales-boosting landing pages
            </li>
            <li>
              <img src={yellowCheck} alt="yellow check" />
              Awesome Feather icons pack
            </li>
            <li>
              <img src={yellowCheck} alt="yellow check" />
              Themed into 3 different styles
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
