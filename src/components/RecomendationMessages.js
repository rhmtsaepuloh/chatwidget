import React from "react";
import Carousel from "nuka-carousel";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import isEmpty from "lodash/isEmpty";

import "../styles/RecomendationMessages.scss";

const RecomendationMessages = ({
  recomendedData,
  onPostBack,
  payload = null,
  urlImagePreview,
}) => {
  const ButtonCarousel = ({ text, key }) => {
    return (
      <div
        className='button'
        key={key}
        onClick={() => onPostBack(text, payload, "text")}>
        <p className='text m-0 truncate'>{text}</p>
      </div>
    );
  };
  return isEmpty(recomendedData) ? null : (
    <div
      className='recomendation w-full rounded box-border p-2'
      style={{ zIndex: isEmpty(urlImagePreview) ? 1 : -1 }}>
      <Carousel
        defaultControlsConfig={{
          pagingDotsStyle: {
            display: "none",
          },
        }}
        wrapAround={true}
        slidesToShow={2.5}
        renderCenterLeftControls={({ previousSlide }) => (
          <div
            className='arrow-button-left bg-white slide-visible'
            onClick={previousSlide}>
            <MdKeyboardArrowLeft className='text-gray-400 text-4xl' />
          </div>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <div
            className='arrow-button-right bg-white slide-visible'
            onClick={nextSlide}>
            <MdKeyboardArrowRight className='text-gray-400 text-4xl' />
          </div>
        )}>
        {recomendedData.map((item, i) => (
          <ButtonCarousel key={i} text={item.message} />
        ))}
      </Carousel>
    </div>
  );
};

export default RecomendationMessages;
