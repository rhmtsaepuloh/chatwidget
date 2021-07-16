import React from "react";
import { hexToRgbA, defaultText } from "../utils/ui";
import Button from "./Button";
import Loading from "./Loading";

import "../styles/Onboarding.scss";
import LogoPowered from "./LogoPowered";

const Onboarding = ({ dataClient, loading, onRegister, content }) => {
  const {
    logo,
    primaryColor,
    secondaryColor,
    buttonColor,
    primaryTextColor,
    secondaryTextColor,
    buttonTextColor,
  } = dataClient;
  const { contentOpening } = content;
  const white = "#FFFFFF"
  const rgb = (opacity) => hexToRgbA(primaryColor, opacity);
  const rgb2 = (opacity) => hexToRgbA(white, opacity);

  return (
    <div className='wrapper-onboarding'>
      <div
        className='main-background flex flex-col justify-between'
        style={{ background: rgb(1) }}>
        <div className='flex items-center justify-between pt-4 pl-4'>
          <p
            className='text-base font-bold'
            style={{ color: primaryTextColor }}>
            {defaultText(contentOpening, "textHeader", "ChatAja Widget")}
          </p>
        </div>
        <div
          className='flex items-center justify-between lg:h-64 lg:w-64 h-40 w-40 rounded-full mx-auto'
          style={{ background: rgb2(0.09) }}>
          <div
            className='flex items-center justify-between lg:h-48 lg:w-48 h-32 w-32 rounded-full mx-auto'
            style={{ background: rgb2(0.07) }}>
            <div
              className='flex items-center justify-between lg:h-32 lg:w-32 h-20 w-20 rounded-full mx-auto'
              style={{ background: rgb2(0.05) }}>
              <img
                alt='logo'
                src={logo}
                className='h-12 w-12 rounded-full mx-auto'
              />
            </div>
          </div>
        </div>
        <div className='text-center px-10'>
          <p
            className='text-white text-base font-bold'
            style={{ color: primaryTextColor }}>
            {defaultText(contentOpening, "textJudul", "Selamat Datang!")}
          </p>
          <p className='text-white text-sm' style={{ color: primaryTextColor }}>
            {defaultText(
              contentOpening,
              "textCaption",
              "Kamu dapat menanyakan apa saja kepada customer service hanya dengan chat..."
            )}
          </p>
        </div>
        <Button
          buttonText={defaultText(contentOpening, "textTombol", "Mulai Chat")}
          onClick={onRegister}
          icon
          background={buttonColor}
          buttonColor={buttonTextColor}
        />
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
      <Loading display={loading} />
    </div>
  );
};

export default Onboarding;
