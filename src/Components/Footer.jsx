import React from "react";
import styled from "styled-components";
import Social from "./Socials";
import { Map, GoogleApiWrapper } from "google-maps-react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Social />
        <Local>
          <Title>info@lore.game</Title>
          <span>47 S Meridian St</span>
          <span>Indianapolis, IN 46204</span>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.4301190198685!2d-86.15974595956028!3d39.765908806623344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50bcfc165cc9%3A0x69702f2ad5bd15be!2s47%20S%20Meridian%20St%2C%20Indianapolis%2C%20IN%2046204!5e0!3m2!1sen!2sus!4v1625756522845!5m2!1sen!2sus"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe> */}
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
