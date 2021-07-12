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
    color: rgb(249, 248, 248);
  }
`;

const List = styled.li`
  list-style: none;
  color: #8251eb;
`;

const Current = styled.li`
  display: none;
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
`;

const Dot = styled.img`
  width: 10%;
  margin-right: 2px;
`;

const Button = styled.span`
  display: inline;
  margin-right: 1rem;
`;
