import React from "react";
import styled from "styled-components";
import discord from "./images/discord.svg";
import facebook from "./images/facebook.svg";
import twitch from "./images/twitch.svg";
import youTube from "./images/youtube-play.svg";
import reddit from "./images/reddit.svg";
import twitter from "./images/twitter.svg";

class Socials extends React.Component {
  render() {
    return (
      <div>
        <Connect>Connect With Us</Connect>
        <Logos>
          <Image src={discord} alt="discord" />{" "}
          <Image src={twitch} alt="twitch" />
          <Image src={facebook} alt="facebook" />{" "}
          <Image src={twitter} alt="twitter" />
          <Image src={youTube} alt="youTube" />{" "}
          <Image src={reddit} alt="reddit" />
        </Logos>
      </div>
    );
  }
}

export default Socials;

const Connect = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
`;

const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  margin-right: 2rem;
`;
