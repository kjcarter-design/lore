import React from "react";
import styled from "styled-components";

class Hero extends React.Component {
  render() {
    return (
      <div>
        <Video
          width="455"
          height="256"
          src="https://www.youtube.com/embed/6X7qvZvhXRo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Video>
        {/* <Reviews /> */}
      </div>
    );
  }
}

export default Hero;

const Video = styled.iframe`
  box-shadow: 4px 4px 1.5px #111b47;
  border: transparent;
`;
