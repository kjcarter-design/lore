import React from "react";
import styled from "styled-components";
import Nec from "./images/mobile-imgs/nec.svg";
import FAQSlider from "./FAQSlider";
import { SliderData } from "./SliderData";

class Faq extends React.Component {
  render() {
    return (
      <FaqContainer id="faq">
          <FAQSlider slides={SliderData} />
      </FaqContainer>
    );
  }
}

export default Faq;

const FaqContainer = styled.div`
  background-image: url(${Nec});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  height: 100vh;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

// const FaqWrapper = styled.div`
//   background-color: #ffffff80;
//   border-radius: 0.5rem;
//   display: flex;
//   flex-direction: column;
//   justify-self: center;
//   height: 20rem;
//   width: 15rem;
// `;

// const QuestionWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 1rem;
// `;

// const OpenQuote = styled.p`
//   display: flex;
//   justify-self: flex-start;
//   font-size: 5rem;
//   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//   height: 40px;
// `;

// const CloseQuote = styled.p`
//   display: flex;
//   align-self: flex-end;
//   font-size: 5rem;
//   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//   height: 40px;
// `;

// const Question = styled.p`
//   display: flex;
//   align-self: center;
//   text-align: center;
//   font-weight: 800;
//   font-size: x-large;
// `;

// const Answer = styled.p`
//   text-align: justify;
//   font-style: italic;
//   font-weight: 500;
//   font-size: large;
//   margin: 1rem;
// `;
