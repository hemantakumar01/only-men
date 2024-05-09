"use client";
import React from "react";
import ReactStars from "react-stars";

type Props = {
  value: number;
  size: number;
};

const Rating = (props: Props) => {
  return (
    <div>
      <ReactStars value={props.value} size={props.size} />
    </div>
  );
};

export default Rating;
