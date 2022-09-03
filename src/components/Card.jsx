import React from "react";
import orange from "../assets/img/orange.svg";
export const Card = ({ img, heading, para, bgColor }) => {
  return (
    <div className="Card" style={{ backgroundColor: bgColor }}>
      <div className="img_wrapper">
        <img src={img} alt="" />
      </div>
      <h1>{heading}</h1>
      <p>{para} Items</p>
    </div>
  );
};
