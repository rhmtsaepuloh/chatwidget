import React from "react";

import "../styles/Onboarding.scss";
import ReactStars from "react-stars";
import { defaultText, hexToRgbA } from "../utils/ui";
import LogoPowered from "./LogoPowered";

const Rating = ({
  onCreateRating,
  onSkipRating,
  ratingChanged,
  dataClient,
  rating,
  content,
}) => {
  const {
    primaryColor,
    secondaryColor,
    buttonColor,
    primaryTextColor,
    logo,
    buttonTextColor,
    secondaryTextColor,
  } = dataClient;
  const { contentPenutup } = content;
  const white = "#FFFFFF"
  const rgb = (opacity) => hexToRgbA(primaryColor, opacity);
  const rgb2 = (opacity) => hexToRgbA(white, opacity);
  return (
    <div className='wrapper-onboarding'>
      <div
        className='main-background flex flex-col justify-between pt-3'
        style={{ background: rgb(1) }}>
        <div
          className='rating-circle flex items-center justify-between  lg:h-64 lg:w-64 h-40 w-40 rounded-full mx-auto'
          style={{ background: rgb2(0.09) }}>
          <div
            className='flex items-center justify-between lg:h-48 lg:w-48 h-32 w-32 rounded-full mx-auto'
            style={{ background: rgb2(0.07) }}>
            <div
              className='flex items-center justify-between lg:h-32  lg:w-32 h-20 w-20 rounded-full mx-auto'
              style={{ background: rgb2(0.05) }}>
              <img
                alt='logo'
                src={logo}
                className='h-12 w-12 rounded-full mx-auto'
              />
            </div>
          </div>
        </div>
        <div className='thanks text-center px-10'>
          <p
            className='text-white text-base font-bold'
            style={{ color: primaryTextColor }}>
            {defaultText(contentPenutup, "textTitle", "Terima Kasih")}
          </p>
          <p className='text-white text-sm' style={{ color: primaryTextColor }}>
            {defaultText(
              contentPenutup,
              "textCaption",
              "Semoga layanan kami memuaskan"
            )}
          </p>
          <div className='flex items-center justify-center'>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={40}
              color2={"#ffd700"}
              color1={"#fa8387"}
              className='mx-auto relative my-0'
              value={rating}
            />
          </div>
          <div
            className='flex items-center justify-center mx-12 rounded box-border text-center cursor-pointer py-1'
            style={{ background: buttonColor }}
            onClick={rating === 0 ? null : onCreateRating}>
            <p className='text-base' style={{ color: buttonTextColor }}>
              Submit
            </p>
          </div>
          <div
            className='flex items-center justify-center mx-12 rounded box-border text-center cursor-pointer py-2'
            name='skiprating'
            onClick={onSkipRating}>
            <p className='text-white text-base'>Nanti Saja</p>
          </div>
        </div>
      </div>
      <div
        className='footer-background flex items-center justify-center mt-8 inset-x-0 fixed'
        style={{
          bottom: "0px",
          padding: "10px 0px",
          background: secondaryColor,
        }}>
        <LogoPowered color={secondaryTextColor} />
        <p
          className='text-xs text-center box-border ml-1'
          style={{ color: secondaryTextColor }}>
          Powered by ChatAja
        </p>
      </div>
    </div>
  );
};

export default Rating;
