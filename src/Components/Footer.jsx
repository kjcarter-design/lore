import React from "react";
import styled from "styled-components";
import Social from "./Socials";
import Map from "./images/mobile-imgs/KenzieMap.svg";
import Logo from "./images/mobile-imgs/Logo.svg";

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Address>
          <Lore src={Logo} alt="Lore Red" />
          <Local>47 S Meridian St, Indianapolis, IN 46204</Local>
          <Title>info@lore.game</Title>
          <KAmap src={Map} alt="Google Location" />
        </Address>
        <Social />
        <PolicyContainer>
          <Policy>
            <Copyright>© 2021 Lore: Kenzie Studios Entertainment</Copyright>
            <Copyright>| All Rights Reserved |</Copyright>
            <Copyright>Powered by Kenzie Games</Copyright>
          </Policy>
          <Terms>
            <TermsLi>Privacy Policy</TermsLi>
            <TermsLi>Terms of Service</TermsLi>
            <TermsLi>Terms of Sale</TermsLi>
            <TermsLi>Support</TermsLi>
          </Terms>
        </PolicyContainer>
      </Container>
    );
  }
}

export default Footer;

const Container = styled.div`
  background-color: rgb(255, 255, 255);
`;

const Lore = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Local = styled.p`
  font-family: "Roboto" sans-serif;
  margin-top: -1.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  text-align: center;
`;

const KAmap = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
`;

const Copyright = styled.p`
  color: rgb(169, 169, 169);
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 0.75rem;
  margin-bottom: 1.5rem;
`;

const Terms = styled.ul`
  display: flex;
  justify-content: space-evenly;
  font-family: "Roboto", sans-serif;
  font-size: 0.6rem;
  color: rgb(169, 169, 169);
  padding-bottom: 3rem;
  list-style: circle;
  @media (min-width: 400px) {
    justify-content: flex-end;
    margin-top: 4rem;
    padding: 2rem;
  }
`;

const Policy = styled.div`
  @media (min-width: 400px) {
    display: flex;
    justify-content: flex-start;
    margin-bottom: -4rem;
  }
`;

const PolicyContainer = styled.div`
  @media (min-width: 400px) {
    background-color: rgb(78, 78, 78);
  }
`;

const TermsLi = styled.li`
  @media (min-width: 400px) {
    margin-left: 2rem;
  }
`;

const Address = styled.div`
  @media (min-width: 400px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    margin-left: 10rem;
  }
`;
