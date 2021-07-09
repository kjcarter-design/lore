import React from "react";
import styled from "styled-components";
import discord from "./images/mobile-imgs/DiscordGrey.svg";
import facebook from "./images/mobile-imgs/FacebookGrey.svg";
import youTube from "./images/mobile-imgs/YouTubeGrey.svg";
import twitter from "./images/mobile-imgs/TwitterGrey.svg";
import insta from "./images/mobile-imgs/InstagramGrey.svg";

class Socials extends React.Component {
  render() {
    return (
      <div>
        <Logos>
          <Image src={facebook} alt="facebook" />
          <Image src={insta} alt="Instagram" />
          <Image src={twitter} alt="twitter" />
          <Image src={discord} alt="discord" />
          <Image src={youTube} alt="youTube" />
        </Logos>
      </div>
    );
  }
}

export default Socials;

const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  margin-right: 1.5rem;
`;
