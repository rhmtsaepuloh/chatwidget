import React, { useState } from "react";
import Rating from "../components/Rating";
import { useSelector, useDispatch } from "react-redux";
import { setRoutes } from "../redux/actions/routesActions";
import { createRating } from "../services/mainServices";

const RatingContainer = () => {
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const { dataClient, content } = useSelector((state) => state.clientReducers);
  const { uniqueUserId } = useSelector((state) => state.messagesReducers);
  const key = new URLSearchParams(window.location.search).get("key");
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const onCreateRating = () => {
    const data = {
      rate: rating,
      uniqueUserId,
    };
    createRating(data, key)
      .then(() => {
        dispatch(setRoutes("/onboarding"));
      })
      .catch((err) => console.error(err));
  };

  const onSkipRating = () => {
    dispatch(setRoutes("/onboarding"));
  };
  return (
    <Rating
      onCreateRating={onCreateRating}
      onSkipRating={onSkipRating}
      ratingChanged={ratingChanged}
      dataClient={dataClient}
      rating={rating}
      content={content}
    />
  );
};

export default RatingContainer;
