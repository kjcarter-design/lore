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
          <Dice src={dice} alt="dice" />
          <Current>Home</Current>
          <List>
            <img src={dotNavbar} alt="spacer" />
            How it Works
          </List>
          <List>
            <img src={dotNavbar} alt="spacer" />
            FAQ's
          </List>
          <List>
            <img src={dotNavbar} alt="spacer" />
            Contact Us
          </List>
          <Button>
            <Sign>Sign In</Sign>
          </Button>
          <List>
            <Free>Try for Free</Free>
          </List>
        </Holder>
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
  font-size: 0.7rem;
  height: 10rem;
  width: 100%;
  @media (min-width: 400px) {
    color: rgb(249, 248, 248);
    margin-top: -5rem;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
  }
`;

const Holder = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  background-color: rgb(255, 255, 255);
  margin-top: 7.5rem;
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.05);
  @media (min-width: 400px) {
    margin-bottom: 2.5rem;
    color: rgb(241, 243, 233);
  }
`;

const List = styled.li`
  list-style: none;
  color: #8251eb;
  @media (min-width: 400px) {
    display: flex;
    width: 100;
    font-size: 1.5rem;
  }
`;

const Current = styled.li`
  display: none;
  @media (min-width: 400px) {
    display: block;
    color: rgb(0, 0, 0);
    font-size: 1.5rem;
  }
`;

const Sign = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  background-color: transparent;
  color: #111b47;
  border: none;
  width: max-content;
  display: none;
  @media (min-width: 400px) {
    display: block;
    margin-left: 10rem;
    margin-right: -5rem;
    font-size: 1.5rem;
  }
`;

const Free = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 0.7rem;
  background-color: #111b47;
  color: #fff;
  padding: 3px;
  align-self: flex-end;
  width: max-content;
  margin-left: 0.75rem;
  border: none;
  @media (min-width: 400px) {
    font-size: 1.5rem;
    padding: 0.5rem;
  }
`;

const Dice = styled.img`
  width: 5%;
`;

const Button = styled.span`
  display: inline;
  margin-right: 1rem;
`;
