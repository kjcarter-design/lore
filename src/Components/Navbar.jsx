import React from "react";
import styled from "styled-components";
import dice from "./images/dice.svg";
import dotNavbar from "./images/dotNavbar.svg";
import "../App.css";
import { Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FAQ from "./FAQ";
import Registration from "./Registration";
import Keyframes from "./Keyframes";

class Navbar extends React.Component {
  render() {
    return (
      <Container>
        <Holder>
          <NavLink>
            <Switch>
              <Dice src={dice} alt="dice" />
              <Route path="./Header" exact component={Header}>
                <Current>Home</Current>
              </Route>

              <Route path="./Keyframes.jsx" exact component={Keyframes}>
                <List>
                  <img src={dotNavbar} alt="spacer" />
                  How it Works
                </List>
              </Route>

              <Route path="./FAQ.jsx" exact component={FAQ}>
                <List>
                  <img src={dotNavbar} alt="spacer" />
                  FAQ's
                </List>
              </Route>

              <Route path="./Footer.jsx" exact component={Footer}>
                <List>
                  <img src={dotNavbar} alt="spacer" />
                  Contact Us
                </List>
              </Route>

              <Button>
                <Sign>Sign In</Sign>
              </Button>

              <Route path="./Registration.jsx" exact component={Registration}>
                <List>
                  <Free>Try for Free</Free>
                </List>
              </Route>
            </Switch>
          </NavLink>
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
  color: rgb(130, 81, 235);
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
