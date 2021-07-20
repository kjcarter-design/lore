
// import React from "react";
// import Carousel from "react-bootstrap/Carousel";

// export class BootstrapCarousel extends React.Component {
//   render() {
//     return (
//       <div>
//         <div className="container-fluid">
//           <Carousel>
//             <Carousel.Item style={{ height: "300px" }}>
//               <img
//                 style={{ height: "300px" }}
//                 className="d-block w-100"
//                 src={"assets/images/Main-Screen.png"}
//               />
//               <Carousel.Caption>
//                 <h3>First Demo </h3>
//               </Carousel.Caption>
//             </Carousel.Item>

//             <Carousel.Item style={{ height: "300px" }}>
//               <img
//                 style={{ height: "300px" }}
//                 className="d-block w-100"
//                 src={"assets/images/Character-Selector.png"}
//               />
//               <Carousel.Caption>
//                 <h3>Second Demo</h3>
//               </Carousel.Caption>
//             </Carousel.Item>

//             <Carousel.Item style={{ height: "300px" }}>
//               <img
//                 style={{ height: "300px" }}
//                 className="d-block w-100"
//                 src={"assets/images/Character-Sheet.png"}
//               />
//               <Carousel.Caption>
//                 <h3>Third Demo</h3>
//               </Carousel.Caption>
//             </Carousel.Item>

//             <Carousel.Item style={{ height: "300px" }}>
//               <img
//                 style={{ height: "200px" }}
//                 className="d-block w-100"
//                 src={"assets/images/Battle-Map.png"}
//               />
//               <Carousel.Caption>
//                 <h3>Third Demo</h3>
//               </Carousel.Caption>
//             </Carousel.Item>

//             <Carousel.Item style={{ height: "300px" }}>
//               <img
//                 style={{ height: "300px" }}
//                 className="d-block w-100"
//                 src={"assets/images/Community-Board.png"}
//               />
//               <Carousel.Caption>
//                 <h3>Third Demo</h3>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>
//         </div>
//       </div>
//     );
//   }
// }

// export default BootstrapCarousel;

import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

export default class KeyFramesComponent extends Component {
state = {
    Carousel: []
}


render(){
  return (
    <CarouselContainer>
      
    </CarouselContainer>
  );
}}

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 0 auto;
`;
const Slide = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin: 2rem;
`;

const Writing = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: rgb(17, 27, 71);
  margin-left: 3.5rem;
`;

 {/* <Carousel infiniteLoop useKeyboardArrows autoPlay> */}
        {/* <div>
          <Slide src="../Main-Screen.png" alt="Start up" />
          <Writing>
            Jump right into the game by creating your own campaign world,
            favorite new character or dynamic battlemap!
          </Writing>
        </div>
        <div>
          <Slide src="../Character-Selector.png" alt="Choose Character" />
          <Writing>
            Create, edit, and assemble all your incredible heroes. Even share
            your favorites with friends!
          </Writing>
        </div>
        <div>
          <Slide src="../Character-Sheet.png" alt="Character Abilities" />
          <Writing>
            View all of character's stats, abilities, and feats. Edit and tweak
            them until your hearts content!
          </Writing>
        </div>
        <div>
          <Slide src="../Battle-Map.png" alt="Battle Map" />
          <Writing>
            Implement the maps you create with our dynamic battle map. Share
            your favorites with the community also!
          </Writing>
        </div>
        <div>
          <Slide src="../Community-Board.png" alt="Community Involvement" />
          <Writing>
            See what the community is up to and share your thoughts. Meet up
            with new players looking to join your epic quest!
          </Writing>
        </div> */}
      {/* </Carousel> */}

