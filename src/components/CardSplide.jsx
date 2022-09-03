import React from "react";
import star from "../assets/img/star (1).svg";
import avatar from "../assets/img/avatar.png";

export const CardSplide = () => {
  return (
    <div className="CardSplide">
      <div className="_wrapper">
        <div className="top_area">
          <img src={avatar} alt="" />
          <div className="presentation">
            <h1>Leo</h1>
            <p>
              Lead Designer
              <div className="stars_wrapper">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </p>
          </div>
        </div>
      </div>
      <h1>It was a very good experience</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
        mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh
        in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id
        augue sit cursus pellentesque enim arcu. Elementum felis magna pretium
        in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis
        diam lacus arcu.
      </p>
    </div>
  );
};
