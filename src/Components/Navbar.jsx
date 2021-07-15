import React from "react";
import styled from "styled-components";
import dice from "./images/dice.svg";
import dotNavbar from "./images/dotNavbar.svg";
import "../App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FAQ from "./FAQ";
import Registration from "./Registration";

class Navbar extends React.Component {
  render() {
    return (
      <Container>
        <Switch>
          <Route path="/" exact link="/*/index.html 3000" />
          <Route path="/about" exact component={Footer} />
          <Route path="/faq" exact component={FAQ} />
          <Route path="/try" exact component={Registration} />
        </Switch>
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
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
  font-size: 0.7rem;
  width: 100%;
  @media (min-width: 400px) {
    color: rgb(249, 248, 248);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
  }
`;

const Holder = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 10vh;
  width: 100vw;
  background-color: rgb(255, 255, 255);
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.05);
  @media (min-width: 400px) {
    color: rgb(241, 243, 233);
  }
`;

const List = styled.li`
  list-style: none;
  color: #8251eb;
  font-size: 0.8rem;
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
  width: max-content;
  margin-right: 2rem;
  border: none;
  @media (min-width: 400px) {
    font-size: 1.5rem;
    padding: 0.5rem;
  }
`;

const Dice = styled.img`
  width: 10%;
  @media (min-width: 400px) {
    width: 5%;
  }
`;

const Button = styled.span`
  display: inline;
  margin-right: 1rem;
`;
