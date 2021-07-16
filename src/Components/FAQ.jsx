import React from "react";
import styled from "styled-components";
import Nec from "./images/mobile-imgs/nec.svg";

// const data = {
//   faqs: [
//     {
//       _id: "0",
//       index: 0,
//       question: "Is Lore free to use?",
//       answer:
//         "Yes! Lore is free to use with the novice membership level. There are more features to with which to play, at higher paid membership levels.",
//     },
//     {
//       _id: "1",
//       index: 1,
//       question: "How does Lore work?",
//       answer:
//         "Lore is a virtual tabletop that works more like a video game. It allows for quicker and more intuitive selection of Game modes, combat tracking, and ambiance control. All rolls are done automatically, allowing for the player and DM to remain immersed in the action.",
//     },
//     {
//       _id: "2",
//       index: 2,
//       question: "Can any rule-set be used?",
//       answer:
//         "Yes! Lore can be used to play a wide variety of games, just make your selection in the campaign creator.",
//     },
//     {
//       _id: "3",
//       index: 3,
//       question: "Can I Import my dnd beyond character sheets?",
//       answer:
//         "Not at this time. However in the future we would like to see some integration. ",
//     },
//   ],
// };

class Faq extends React.Component {
  render() {
    return (
      <FaqContainer id="faq">
        <FaqWrapper>
          <QuestionWrapper>
            <OpenQuote>"</OpenQuote>
            <Question>Is Lore free to use?</Question>
            <CloseQuote>"</CloseQuote>
          </QuestionWrapper>
          <div>
            <Answer>
              Yes! Lore is free to use with the novice membership level. There
              are more features to with which to play, at higher paid membership
              levels.
            </Answer>
          </div>
        </FaqWrapper>
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
  height: 568px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const FaqWrapper = styled.div`
  background-color: #ffffff80;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-self: center;
  height: 20rem;
  width: 15rem;
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const OpenQuote = styled.p`
  display: flex;
  justify-self: flex-start;
  font-size: 5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  height: 40px;
`;

const CloseQuote = styled.p`
  display: flex;
  align-self: flex-end;
  font-size: 5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  height: 40px;
`;

const Question = styled.p`
  display: flex;
  align-self: center;
  text-align: center;
  font-weight: 800;
  font-size: x-large;
`;

const Answer = styled.p`
  text-align: justify;
  font-style: italic;
  font-weight: 500;
  font-size: large;
  margin: 1rem;
`;
