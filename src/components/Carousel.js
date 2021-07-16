import React, { useState } from "react";
import Carousel from "nuka-carousel";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import isEmpty from "lodash/isEmpty";
import { truncateWords } from "../utils/messages";
import CardCarousel from "../components/CardCarousel";
import RenderArrow from "../components/RenderArrow";

const CarouselContainer = ({ logoAdmin, item, onPostBack }) => {
  const { payload, timestamp } = item;
  const [slideIndex, setSlideIndex] = useState(0);
  return isEmpty(item) ? null : (
    <div className='flex bubble-carousel' style={{ height: 360 }}>
      <div className='carousel w-full rounded box-border p-2'>
        <Carousel
          slideIndex={slideIndex}
          afterSlide={(slideIndex) => setSlideIndex(slideIndex)}
          defaultControlsConfig={{
            pagingDotsStyle: {
              display: "none",
            },
          }}
          slidesToShow={2.15}
          renderCenterLeftControls={({ previousSlide }) => {
            if (slideIndex === 0) return null;
            return (
              <RenderArrow onClick={previousSlide}>
                <MdKeyboardArrowLeft className='text-white text-4xl' />
              </RenderArrow>
            );
          }}
          renderCenterRightControls={({ nextSlide }) => {
            if (slideIndex === payload.cards.length - 2) return null;
            return (
              <RenderArrow onClick={nextSlide}>
                <MdKeyboardArrowRight className='text-white text-4xl' />
              </RenderArrow>
            );
          }}>
          {payload.cards.map((card, i) => (
            <CardCarousel
              key={i}
              srcImage={card.image}
              title={card.title}
              description={truncateWords(card.description, 4, "...")}
              buttons={card.buttons}
              onPostBack={onPostBack}
            />
          ))}
        </Carousel>
        <div className='file-timestamp flex items-center justify-end mt-3'>
          <p className='text-sm' style={{ color: "#979797" }}>
            {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselContainer;
