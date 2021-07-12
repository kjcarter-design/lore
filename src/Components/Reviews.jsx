import React from "react";
import styled from "styled-components";

class Reviews extends React.Component {
  render() {
    return (
      <Container>
        <ContainerLi>
          <li>
            "Lore brings the fight to your fingers. Fight with legends and
            explore new lands. Each quest requires speed, knowledge but most
            importantly it requires heart."
          </li>
          <li> --&nbsp; John Smith</li>

          {/* <li>
            "Lore brings the fight to your fingers. Fight with legends and
            explore new lands. Each quest requires speed, knowledge but most
            importantly it requires heart."
          </li>
          <li> --&nbsp; John Smith</li> */}
        </ContainerLi>
      </Container>
    );
  }
}

export default Reviews;

const Container = styled.div`
  background-color: #fdfbfb;
`;

const ContainerLi = styled.ul`
  width: 50vw;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  text-align: justify;
  margin-left: 2rem;
`;
