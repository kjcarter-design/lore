import React, { useState } from "react";
import { KeyframeSlideData } from "./KeyframeSlideData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";


const KeyframeSlides = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="keyframeSlider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {KeyframeSlideData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel image" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};
export default KeyframeSlides;
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