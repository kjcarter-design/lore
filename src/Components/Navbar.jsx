import React from "react";
import styled from "styled-components";
import dice from "./images/dice.svg";
import dotNavbar from "./images/dotNavbar.svg";
import "../App.css";
import { HashLink } from "react-router-hash-link";
// import Header from "./Header";
// import Footer from "./Footer";
// import FAQ from "./FAQ";
// import Registration from "./Registration";
// import Keyframes from "./Keyframes";

class Navbar extends React.Component {
  render() {
    return (
      <Container>
        <Holder>
          <List>
            <Dice src={dice} alt="Logo" />
            <Spacer src={dotNavbar} alt="circle" />
            <HashLink style={{ textDecoration:'none'}} to={"#keyframes"}>How it Works</HashLink>
            <Spacer style={{ textDecoration:'none'}}src={dotNavbar} alt="circle" />
            <HashLink style={{ textDecoration:'none'}} to={"#faq"}>FAQ's</HashLink>
            <Spacer src={dotNavbar} alt="circle" />
            <HashLink style={{ textDecoration:'none'}} to={"#footer"}>Contact Us</HashLink>
            <HashLink style={{ textDecoration:'none'}} to={"#registration"}>Sign In</HashLink>
            <HashLink to={"#registration"}>
              <Free>Try for Free</Free>
            </HashLink>
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  text-decoration: none;
  width: 100%;
  list-style: none;
  color: rgb(130, 81, 235);
  font-size: 0.8rem;
  &:visited{
  color: rgb(130, 81, 235);
  text-decoration: none;
}
  @media (min-width: 400px) {
    display: flex;
    width: 100;
    font-size: 1.5rem;
  }
`;

const Spacer = styled.img`
  display: none;
`;

const Free = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 0.7rem;
  background-color: #111b47;
  color: #fff;
  padding: 3px;
  width: max-content;
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
