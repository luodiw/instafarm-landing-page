import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Main = () => {
  let navigate = useNavigate();
  const [EmailValue, setEmailValue] = useState("");
  return (
    <main>
      <div className="main_content ">
        <div className="presentation">
          <h1>
            Instafarm is helping people to live the healthiest, and have the
            best diet
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            laudantium, inventore hic molestiae quia voluptatibus provident
            voluptas.
          </p>
          <span id="span_section_wrapper"></span>
          <div className="input_wrapper">
            <input
              type="text"
              placeholder="Enter your email address"
              value={EmailValue}
              onChange={(e) => {
                setEmailValue(e.target.value);
              }}
            />
            <button
              onClick={(e) => {
                if (EmailValue != "") {
                  navigate("/SignUp");
                } else {
                  window.alert("Please Enter Email Address");
                }
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
