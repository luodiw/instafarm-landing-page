import React from "react";
import list1 from "../assets/img/list_one.png";
import list2 from "../assets/img/lost_2.png";
import list3 from "../assets/img/list3.png";
export const PromiseWrapper = () => {
  return (
    <section className="promise_wrapper">
      <div className="content_area">
        <div className="preseentation_area">
          <h1>Say no to compromises.</h1>
          <ul>
            <li>
              <div className="image_wrapper">
                <img src={list1} alt="" />
              </div>
              <div className="presentation">
                <h1>Best Prices & Deals</h1>
                <p>Don’t miss our daily amazing deals and prices</p>
              </div>
            </li>
            <li>
              <div className="image_wrapper">
                <img src={list2} alt="" />
              </div>
              <div className="presentation">
                <h1>Refundable</h1>
                <p>If your items have damage we agree to refund it</p>
              </div>
            </li>
            <li>
              <div className="image_wrapper">
                <img src={list3} alt="" />
              </div>
              <div className="presentation">
                <h1>Free delivery</h1>
                <p>Do a $50 dollar purchase anywheere!</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
