import React from "react";
import styled from "styled-components";
import dice from "./images/dice.svg";
import dotNavbar from "./images/dotNavbar.svg";
import "../App.css";

class Navbar extends React.Component {
  render() {
    return (
      <Container>
        <Holder>
          <Dot src={dice} alt="dice" />
          <Current>Home</Current>
          <List>
            <Dot src={dotNavbar} alt="spacer" />
            How it Works
          </List>
          <List>
            <Dot src={dotNavbar} alt="spacer" />
            FAQ's
          </List>
          <List>
            <Dot src={dotNavbar} alt="spacer" />
            Contact Us
          </List>
        </Holder>
        <Button>
          <Sign>Sign In</Sign>
          <Free>Try for Free</Free>
        </Button>
      </Container>
    );
  }
}

export default Navbar;

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
`;

const Holder = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;
  background-color: #f9f8f8;
  position: relative;
`;

const List = styled.li`
  list-style: none;
  color: #8251eb;
`;

const Current = styled.li`
  color: #000;
`;

const Sign = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  background-color: transparent;
  color: #111b47;
  border: none;
  width: max-content;
`;

const Free = styled.button`
  font-family: "Roboto", sans-serif;
  background-color: #111b47;
  color: #fff;
  padding: 10px;
  width: max-content;
  margin-left: 1rem;
`;

const Dot = styled.img`
  margin-right: 10px;
`;

const Button = styled.span`
  margin-left: 15rem;
`;
