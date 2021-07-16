import React from "react";

const CardCarousel = ({
  srcImage,
  title,
  description,
  buttons,
  onPostBack,
  key,
}) => {
  return (
    <div
      className='bg-white shadow-lg m-2 mr-1 p-2 z-20 rounded-lg'
      style={{ height: 300 }}
      key={key}>
      <img
        src={srcImage}
        alt='url'
        className='h-32 w-full rounded-lg object-cover'
      />
      <p className='font-bold truncate text-sm mt-2'>{title}</p>
      <p className='text-sm overflow-ellipsis'>{description}</p>
      <div className='absolute bottom-0 w-4/5'>
        {buttons.map((el, i) => {
          if (el.type === "link") {
            return (
              <button
                className='w-full bg-blue-100 p-2 cursor-pointer text-center m-0 my-2 rounded-lg hover:bg-blue-400 focus:ring-2 focus:ring-blue-700 z-20'
                key={i}>
                <a
                  href={el.payload.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-700 text-center mx-auto'>
                  {el.label}
                </a>
              </button>
            );
          } else {
            return (
              <button
                className='w-full bg-blue-100 p-2 cursor-pointer text-center m-0 text-blue-700 my-2 rounded-lg hover:bg-blue-400 focus:ring-2 focus:ring-blue-700 z-20'
                key={i}
                onClick={() =>
                  onPostBack(el.label, el.payload, "button_postback_response")
                }>
                {el.label}
              </button>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CardCarousel;
