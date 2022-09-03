import React from "react";
import sc1 from "../assets/img/facebook.svg";
import sc2 from "../assets/img/insta.svg";
import sc3 from "../assets/img/twi.svg";
import sc4 from "../assets/img/li_map-pin.svg";
import mail from "../assets/img/mail.svg";
import logo from "../assets/img/logo.svg";
export const Footer = () => {
  return (
    <footer>
      <div className="content_area common_width">
        <img src={logo} className="logo" alt="" />
        <div className="footer_grid">
          <div className="col">
            <a href="#">
              <img src={sc1} alt="" />
            </a>
            <a href="#">
              <img src={sc2} alt="" />
            </a>
            <a href="#">
              <img src={sc3} alt="" />
            </a>
          </div>

          <div className="col">
            <h1>
              <img src={sc4} alt="" />
              Address:
            </h1>
            <p>807 Union Street, Schenectady, NY 12308</p>
          </div>
          <div className="col">
            <h1>
              <img src={mail} alt="" />
              Email:
            </h1>
            <p>hello@instafarm.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
