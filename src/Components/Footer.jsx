import React from "react";
import styled from "styled-components";
import Social from "./Socials";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Social />
        <Local>
          <Title>Lore Entertainment</Title>
          <span>1234 Main Street</span>
          <span>Indianapolis, IN 989898</span>
          <span>286-555-5555</span>
          <span>www.loreentertainment.com</span>
        </Local>
      </div>
    );
  }
}

export default Footer;

const Local = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5rem;
  font-size: 1.25rem;
  font-weight: bold;
`;

const Title = styled.span`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
