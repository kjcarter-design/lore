import React from "react";
import styled from "styled-components";
import Social from "./Socials";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Social />
        <Local>
          <Title>info@lore.game</Title>
          <span>47 S Meridian St</span>
          <span>Indianapolis, IN 46204</span>
        </Local>
      </div>
    );
  }
}

export default Footer;

const Local = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 1.5rem;
  font-size: 1.25rem;
  font-weight: bold;
`;

const Title = styled.span`
  font-size: 1rem;
  margin-bottom: 1rem;
`;
