import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
export const Header = () => {
  return (
    <div className="header_wrapper">
      <header className="common_width">
        <a href="#" className="logo">
          <img src={logo} alt="" />
        </a>
        <a href="#span_section_wrapper" className="button">
          Sign Up
        </a>
      </header>
    </div>
  );
};
