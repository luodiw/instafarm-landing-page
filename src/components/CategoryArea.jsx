import React,{useEffect, useState} from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

import { Card } from "./Card";
import { categoryData } from "./category";
export const CategoryArea = () => {
  const [active,setActive]=useState("All")
  const [categoryDataState,setcategoryDataState]=useState(categoryData)


const Filterfun=text=>{
  let filters=categoryData.filter(EachObj=>EachObj.cat.includes(text))
  setcategoryDataState(filters)
}
  return (
    <div       className={`${categoryDataState.length==0&&"no_data"} CategoryArea common_width`}>
      <div className="top_area">
        <h1>Our Groceries</h1>
        <nav>
          <li className={active=="All"&&"active"} onClick={e=>{
            setActive("All")
            Filterfun("")
          }}>All</li>
          <li className={active=="Vegetables"&&"active"} onClick={e=>{
            setActive("Vegetables")
            Filterfun("Vegetables")
          }}>Vegetables</li>
          <li className={active=="Fruits"&&"active"} onClick={e=>{
            setActive("Fruits")
            Filterfun("Fruits")

          }}>Fruits</li>
          <li className={active=="Coffe & teas"&&"active"} onClick={e=>{
            setActive("Coffe & teas")
            Filterfun("Coffe & teas")
          }}>Coffe & teas</li>
          <li className={active=="Meat"&&"active"} onClick={e=>{
            setActive("Meat")
            Filterfun("Meat")
          }}>Meat</li>
        </nav>
      </div>

      <Splide

        options={{
          padding: 0,
          perPage: 7,
          gap: 10,
          // arrows: false,
          pagination: false,
          breakpoints: {
            1100: {
              perPage: 5,
            },
            650: {
              perPage: 3,
            },
            450: {
              perPage: 2,
            },
          },
        }}
      >
        {categoryDataState.map((EachData, key) => (
          <SplideSlide key={key}>
            <Card
              img={EachData.img}
              heading={EachData.title}
              para={EachData.item}
              bgColor={EachData.bgColor}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
