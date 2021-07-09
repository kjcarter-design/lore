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
          <List>
            <Free>Try for Free</Free>
          </List>
        </Holder>
        <Button>
          <Sign>Sign In</Sign>
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
  font-size: 0.7rem;
  height: 10rem;
  width: 100%;
`;

const Holder = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: #f9f8f8;
  margin-top: 5.25rem;
`;

const List = styled.li`
  list-style: none;
  color: #8251eb;
`;

const Current = styled.li`
  display: none;
`;

const Sign = styled.button`
  display: none;
`;

const Free = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 0.7rem;
  background-color: #111b47;
  color: #fff;
  padding: 3px;
  align-self: flex-end;
  width: max-content;
  margin-left: 1rem;
  border: none;
`;

const Dot = styled.img`
  width: 10%;
  margin-right: 2px;
`;

const Button = styled.span`
  margin: 0;
  display: inline;
`;

// const Container = styled.div`

// `;

// const Holder = styled.ul`

//   width: 60%;

//   /* position: relative; */
// `;

// const Current = styled.li`
//   color: #000;
// `;

// const Sign = styled.button`
//   font-family: "Roboto", sans-serif;
//   font-size: 1.2rem;
//   background-color: transparent;
//   color: #111b47;
//   border: none;
//   width: max-content;
//   @media (max-width: 400px) {
//     display: none;
//   }
// `;

// const Dot = styled.img`
//   margin-right: 10px;
// `;

// const Button = styled.span`
//   margin-left: 15rem;
// `;
