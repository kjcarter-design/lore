import React from "react";
import styled from "styled-components";
import RedFlame from "../Components/images/RedFlame.svg";
import Android from "../Components/images/Android.svg";
import Appstore from "../Components/images/Appstore.svg";
import Webapp from "../Components/images/Webapp.svg";

class Menu extends React.Component {
  render() {
    return (
      <Tincan>
        <img src={RedFlame} alt="red flame" />
        <div>
          <img src={Android} alt="android" class="fakeimg" />
          <img src={Appstore} alt="appstore" class="fakeimg" />
          <img src={Webapp} alt="webapp" class="fakeimg" />
        </div>
      </Tincan>
    );
  }
}

export default Menu;

const Tincan = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flame = styled.img`
  text-align: center;
  margin-left: 40rem;
`;

const Fakeimage = styled.img`
  background-color: #aaa;
  width: 100%;
  padding: 1px;
`;

// const Loreloactions = styled.img`
//   display: flex;
//   width: 100%;
//   padding-left: 2rem;
//   justify-content: center;
//   min-height: 5vh;
//   align-items: center;
// `;
