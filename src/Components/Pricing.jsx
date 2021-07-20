import React from "react";
import styled from "styled-components";
import "../App.css";
import greyCheck from "./images/greyCheck.svg";
import greenCheck from "./images/greenCheck.svg";
import yellowCheck from "./images/yellowCheck.svg";

export default class Pricing extends React.Component {
  render() {
    return (
      <Container>
        <PricingHeader>
          <PricingTitle>Affordable Pricing</PricingTitle>
          <PricingSubtitle>monthly</PricingSubtitle>
        </PricingHeader>

        <PricingContainer>
          <PriceCard>
            <PriceCardTitle>Free</PriceCardTitle>
            <PriceCardSubtitle>NOVICE PACKAGE</PriceCardSubtitle>
            <PriceCardFeatures>
              <PriceCardFeatureItem>
                Create up to 8 different characters
              </PriceCardFeatureItem>
              <PriceCardFeatureItem>
                Create and join campaigns
              </PriceCardFeatureItem>
              <PriceCardFeatureItem>
                Access to the battle map and public forums
              </PriceCardFeatureItem>
            </PriceCardFeatures>
          </PriceCard>

          <PriceCard>
            <PriceCardTitle>$5 / MO</PriceCardTitle>
            <PriceCardSubtitle>ADEPT PACKAGE</PriceCardSubtitle>
            <PriceCardFeatures2>
              <PriceCardFeatureItem2>
                Access to all novice package perks
              </PriceCardFeatureItem2>
              <PriceCardFeatureItem2>
                Create unlimited characters
              </PriceCardFeatureItem2>
              <PriceCardFeatureItem2>
                Custom homebrew campaign tool sets
              </PriceCardFeatureItem2>
              <PriceCardFeatureItem2>
                Wider variety of customization for maps and characters
              </PriceCardFeatureItem2>
              
            </PriceCardFeatures2>
          </PriceCard>

          <PriceCard>
            <PriceCardTitle>$8 / MO</PriceCardTitle>
            <PriceCardSubtitle>MASTER PACKAGE</PriceCardSubtitle>
            <PriceCardFeatures3>
              <PriceCardFeatureItem3>
                Access to all novice and adept perks
              </PriceCardFeatureItem3>
              <PriceCardFeatureItem3>
                Early access to new tools and mechanics
              </PriceCardFeatureItem3>
              <PriceCardFeatureItem3>
                Unlimited encounters and monsters
              </PriceCardFeatureItem3>
              <PriceCardFeatureItem3>
                Monthly perks and rewards
              </PriceCardFeatureItem3>
            </PriceCardFeatures3>
          </PriceCard>
        </PricingContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const PricingContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (min-width: 400px) {
    flex-direction: row;
    width: 100%;
  }
`;

const PricingHeader = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 3vh;
`;

const PricingTitle = styled.h1`
  font-size: 10vw;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media (min-width: 400px) {
    font-size: 8vw;
  }
`;

const PricingSubtitle = styled.p`
  font-size: 8vw;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #8251eb;

  @media (min-width: 400px) {
    font-size: 6vw;
  }
`;

const PriceCard = styled.li`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 80vw;
  height: 40vh;
  background: white;
  margin: 0 0 3vh 0;
  padding: 0vw;
  box-shadow: 1px 2px 5px 1px gray;

  @media (min-width: 400px) {
    width: 30vw;
    height: 40vw;
  }
`;

const PriceCardTitle = styled.h2`
  font-size: 10vw;
  margin-top: 5vh;
  @media (min-width: 400px) {
    font-size: 5vw;
  }
`;

const PriceCardSubtitle = styled.h3`
  font-size: 5vw;
  @media (min-width: 400px) {
    font-size: 2.5vw;
  }
`;

const PriceCardFeatures = styled.ul`
  list-style: none;
  margin: 1vh 5vw 2vw 5vw;
`;

const PriceCardFeatureItem = styled.li`
  margin: 0 0 1.5vh 0;
  &:before {
    content: url(${greyCheck});
    margin: 0 2vw 0 0;
  }
`;

const PriceCardFeatures2 = styled.ul`
  list-style: none;
  margin: 1vh 5vw 2vw 5vw;
`;

const PriceCardFeatureItem2 = styled.li`
  margin: 0 0 1.5vh 0;
  &:before {
    content: url(${greenCheck});
    margin: 0 2vw 0 0;
  }

  @media (min-width: 400px) {
    text-overflow: ellipsis;
    
  }
`;

const PriceCardFeatures3 = styled.ul`
  list-style: none;
  margin: 1vh 5vw 2vw 5vw;
`;

const PriceCardFeatureItem3 = styled.li`
  margin: 0 0 1.5vh 0;
  &:before {
    content: url(${yellowCheck});
    margin: 0 2vw 0 0;
  }
`;

{
  /* <Main>
//         <Price>
//           <h1>Affordable Pricing</h1>
//           <Monthly>monthly</Monthly>
//         </Price>
//         <Container>
//           <Forever>
//             <FreeTitle>
//               <Free>Free</Free>
//               <Novice>Novice Package</Novice>
//             </FreeTitle>
//             <ul>
//               <li>
//                 <GreyChecked src={greyCheck} alt="grey check" />
//                 Create up to 8 different characters
//               </li>
//               <li>
//                 <GreyChecked src={greyCheck} alt="grey check" />
//                 Create and join campaigns
//               </li>
//               <li>
//                 <GreyChecked src={greyCheck} alt="grey check" />
//                 Access to the battle map and public forums
//               </li>
//               <Button>Try for Free</Button>
//             </ul>
//           </Forever>
//           <Editor>
//             <FreeTitle>
//               <Free>$5/mo</Free>
//               <Novice>Adept Package</Novice>
//             </FreeTitle>
//             <ul>
//               <li>
//                 <GreyChecked src={greenCheck} alt="green check" />
//                 Access to all novice package perks
//               </li>
//               <li>
//                 <GreyChecked src={greenCheck} alt="green check" />
//                 Create unlimited characters
//               </li>
//               <li>
//                 <GreyChecked src={greenCheck} alt="green check" />
//                 Custom homebrew campaign tool sets
//               </li>
//               <QuoteLi>
//                 <GreyChecked src={greenCheck} alt="green check" />
//                 <blockquote>
//                   Wider variety of customization for maps and characters
//                 </blockquote>
//               </QuoteLi>
//               <QuoteLi>
//                 <GreyChecked src={greenCheck} alt="green check" />
//                 <blockquote>
//                   Access 100+ assets including music and sound tracks for combat
//                   and ambiance management
//                 </blockquote>
//               </QuoteLi>
//             </ul>
//           </Editor>
//           <Month>
//             <FreeTitle>
//               <Free>$8/mo</Free>
//               <Novice>Master Package</Novice>
//             </FreeTitle>
//             <ul>
//               <li>
//                 <GreyChecked src={yellowCheck} alt="yellow check" />
//                 Access to all novice and adept perks
//               </li>
//               <li>
//                 <GreyChecked src={yellowCheck} alt="yellow check" />
//                 Early access to new tools and mechanics
//               </li>
//               <li>
//                 <GreyChecked src={yellowCheck} alt="yellow check" />
//                 Unlimited encounters and monsters
//               </li>
//               <li>
//                 <GreyChecked src={yellowCheck} alt="yellow check" />
//                 Monthly perks and rewards
//               </li>
//             </ul>
//           </Month>
//         </Container>
//       </Main> */
}

// export default Pricing;

// const Main = styled.div`
//   background-color: rgb(255, 255, 255);
//   margin-top: 2rem;
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-evenly;
//   font-family: "Roboto", sans-serif;
//   @media (min-width: 400px) {
//     flex-direction: row;
//     justify-content: space-around;
//     align-items: center;
//   }
// `;

// const Price = styled.div`
//   font-family: "Roboto", sans-serif;
//   font-weight: 300;
//   font-size: 2rem;
//   text-align: center;
//   @media (min-width: 400px) {
//     font-weight: 600;
//   }
// `;

// const Monthly = styled.h3`
//   color: #8251eb;
//   font-size: 1.5rem;
// `;

// const Forever = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
//   width: 90%;
//   height: 350px;
//   list-style: none;
//   line-height: 2rem;
//   margin-top: 2rem;
//   @media (min-width: 400px) {
//     width: 30%;
//   }
// `;

// const Editor = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   box-shadow: 2px 2px 6px rgba(255, 232, 21, 0.5);
//   width: 90%;
//   height: 350px;
//   list-style: none;
//   line-height: 2rem;
//   margin-top: 2rem;
//   @media (min-width: 400px) {
//     width: 30%;
//   }
// `;

// const Month = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
//   width: 90%;
//   height: 350px;
//   list-style: none;
//   line-height: 2rem;
//   margin-top: 2rem;
//   margin-bottom: 2rem;
//   @media (min-width: 400px) {
//     width: 30%;
//     margin-bottom: 0;
//   }
// `;

// const Free = styled.div`
//   font-size: 2rem;
//   margin-right: 0.25rem;
//   text-transform: uppercase;
// `;

// const FreeTitle = styled.div`
//   margin-bottom: 1rem;
// `;

// const Novice = styled.div`
//   font-size: 1rem;
//   text-transform: uppercase;
// `;

// const GreyChecked = styled.img`
//   margin-right: 10px;
// `;

// const QuoteLi = styled.li`
//   display: flex;
//   line-height: 1.5rem;
// `;

// const Button = styled.button`
//   color: rgb(255, 255, 255);
//   background-color: rgb(17, 27, 71);
//   border-radius: 2px;
//   padding: 0.25rem;
//   border-style: none;
//   margin-top: 2rem;
//   margin-left: 7rem;
// `;
