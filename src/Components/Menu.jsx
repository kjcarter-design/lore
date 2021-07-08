import React from "react";
import styled from "styled-components";
import RedFlame from "../Components/images/RedFlame.svg";

class Menu extends React.Component {
  render() {
    return (
      <div>
        <Flame src={RedFlame} alt="red flame" />

        <div>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

export default Menu;

const Flame = styled.img`
  margin-left: 30rem;
`;
