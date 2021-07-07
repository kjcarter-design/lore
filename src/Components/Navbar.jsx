import React from "react";
import styled from "styled-components";
import dice from "./images/dice.svg";
import dotNavbar from "./images/dotNavbar.svg";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Holder>
          <img src={dice} alt="dice" />
          <List>How it works</List>
          <img src={dotNavbar} alt="spacer" />
          <List>Who we are</List>
          <img src={dotNavbar} alt="spacer" />
          <List>What we do</List>
          <img src={dotNavbar} alt="spacer" />
          <List>Contact Us</List>
          <Button>Sign In</Button>
        </Holder>
      </div>
    );
  }
}

export default Navbar;

const Holder = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
`;

const List = styled.li`
  list-style: none;
  color: #8251eb;
`;

const Button = styled.button`
  background-color: #111b47;
  color: #fff;
  width: 11.5rem;
  height: 2.2rem;
`;
