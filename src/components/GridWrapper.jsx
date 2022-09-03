import React from "react";
import { CardsWrapper } from "./CardsWrapper";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
export const GridWrapper = () => {
  return (
    <section className="grid_container_area common_width">
      <div className="grid_inner_area">
        <div className="left_side order_now no_order">
          <button>Save time!</button>
          <h1>This guy in your inbox!</h1>
          <p>Want a vegeatable or fruit? We send you</p>
        </div>
        <CardsWrapper />
      </div>
      <div className="grid_inner_area">
        <div className="for_desktop">
          <CardsWrapper />
        </div>
        <div className="left_side order_now no_order">
          <button>Save time!</button>
          <h1>This guy in your inbox!</h1>
          <p>Want a vegeatable or fruit? We send you</p>
        </div>
        <div className="for_mbl">
          <CardsWrapper />
        </div>
      </div>
      <div className="grid_inner_area">
        <div className="left_side order_now">
          <h1>Organic Food</h1>
          <p>More than 95% of our farms are organic</p>
          <button>
            Order Now
            <img src="./assets/img/li_arrow-right.svg" alt="" />
          </button>
        </div>
        <CardsWrapper />
      </div>
    </section>
  );
};
