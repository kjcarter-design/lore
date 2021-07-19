import React from "react";
import IGN from "../Components/images/IGN.svg";
import styled from "styled-components";
import OpenQuote from "../Components/images/openquote.png";
import CloseQuote from "../Components/images/closequote.png";

class Reviews extends React.Component {
  render() {
    return (
      <Container>
        <ReviewCarousel>
          <Review>
            <OpenQuotation src={OpenQuote}  alt='Open Quote'/>
            <ReviewText>
              Lore brings the fight to your fingers. Fight with legends and
              explore new lands. Each quest requires speed, knowledge but most
              importantly it requires heart.
            </ReviewText>
            <CloseQuotation src={CloseQuote} alt='Close Quote' />

            <Attribution>
              <p> -- John Smith</p>
              <img src={IGN} alt='Attribution' />
            </Attribution>
          </Review>
        </ReviewCarousel>
      </Container>
    );
  }
}

export default Reviews;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ReviewCarousel = styled.ul`
  width: 80vw;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  text-align: left;
  margin: 3rem;
  @media (min-width: 400px) {
    width: 50vw;
  }
`;

const Review = styled.li`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  width: 100%;
`;

const ReviewText = styled.p`
  font-size: 1rem;
  width: 100%;
  text-align: center;
  @media (min-width: 400px) {
    font-size: 2rem;
  }
`;

const OpenQuotation = styled.img`
  position: relative;
  left: -2rem;
  width: 3rem;
`;
const CloseQuotation = styled.img`
  position: relative;
  right: -2rem;
  width: 3rem;
  margin-bottom: 1rem;
  align-self: flex-end;
`;

const Attribution = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
`;
