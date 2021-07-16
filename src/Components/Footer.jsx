import React from "react";
import styled from "styled-components";
import Social from "./Socials";
import Map from "./images/mobile-imgs/KenzieMap.svg";
import Logo from "./images/mobile-imgs/Logo.svg";

class Footer extends React.Component {
  render() {
    return (
      <Container id="footer">
        <FooterTitle>
          <Lore src={Logo} alt="Lore Red" />
          <Local>47 S Meridian St, Indianapolis, IN 46204</Local>
          <Title>info@lore.game</Title>
          <MapContainer>
            <KAmap src={Map} alt="Google Location" />
          </MapContainer>
        </FooterTitle>
        <Social />
        <PolicyContainer>
          <Trademarks>
            <Copyright>© 2021 Lore: Kenzie Studios Entertainment</Copyright>
            <Copyright>| All Rights Reserved |</Copyright>
            <Copyright>Powered by Kenzie Games</Copyright>
          </Trademarks>
          <Policies>
            <TermsLi>Privacy Policy</TermsLi>
            <TermsLi>Terms of Service</TermsLi>
            <TermsLi>Terms of Sale</TermsLi>
            <TermsLi>Support</TermsLi>
          </Policies>
        </PolicyContainer>
      </Container>
    );
  }
}

export default Footer;

const Container = styled.div`
  @media (min-width: 400px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "blank, Title, Map";
  }
`;

const FooterTitle = styled.div`
  grid-area: Title;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  height: 100%;
  @media (min-width: 400px) {
    margin-bottom: 10rem;
  }
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

const MapContainer = styled.div`
  grid-area: Map;
  display: flex;
  justify-content: center;
  align-self: center;
  margin-right: 0;
`;

const KAmap = styled.img`
  height: 100%;
  width: 70%;
  display: flex;
  margin-right: 0;
  justify-self: center;
  align-self: center;
`;

const Socials = styled.div`
  grid-area: Title;
  @media (min-width: 400px) {
    align-self: flex-end;
    margin-bottom: 1rem;
  }
`;

const PolicyContainer = styled.div`
  @media (min-width: 400px) {
    grid-area: Footer;
    background-color: rgb(78, 78, 78);
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 0 0.5rem;
  }
`;

const Trademarks = styled.div`
  @media (min-width: 400px) {
    display: flex;
  } ;
`;

const Copyright = styled.p`
  color: rgb(169, 169, 169);
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 0.75rem;
  margin-bottom: 1.5rem;
`;

const Policies = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0.5rem;
  color: rgb(169, 169, 169);
  @media (min-width: 400px) {
    display: flex;
  } ;
`;

const TermsLi = styled.li`
  margin: 0.5rem;
  @media (min-width: 400px) {
    margin-left: 2rem;
  }
`;
