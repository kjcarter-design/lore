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
          <Button>
            <Sign>Sign In</Sign>
            <Free>Try for Free</Free>
          </Button>
        </Holder>
      </div>
    );
  }
}

export default Navbar;

const Holder = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: #ece9e9;
  position: relative;
`;

const List = styled.li`
  list-style: none;
  color: #8251eb;
`;

const Sign = styled.button`
  background-color: #111b47;
  color: #fff;
  width: 11.5rem;
  height: 2.2rem;
`;

const Free = styled.button`
  background-color: #111b47;
  color: #fff;
  width: 11.5rem;
  height: 2.2rem;
  margin-left: 1rem;
`;

const Button = styled.div`
  position: relative;
`;
