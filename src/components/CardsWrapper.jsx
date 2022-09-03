import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import { CardSplide } from "./CardSplide";
export const CardsWrapper = () => {
  return (
    <div className="splider_wrapper">
      <Splide
        className="CardsWrapperSplider"
        aria-label="My Favorite Images"
        options={{
          perPage:1,
          gap: 20,
          arrows: false,
        
        }}
      >
        <SplideSlide>
          <CardSplide />
        </SplideSlide>
        <SplideSlide>
          <CardSplide />
        </SplideSlide>{" "}
        <SplideSlide>
          <CardSplide />
        </SplideSlide>{" "}
        <SplideSlide>
          <CardSplide />
        </SplideSlide>{" "}
        <SplideSlide>
          <CardSplide />
        </SplideSlide>
      </Splide>
    </div>
  );
};
