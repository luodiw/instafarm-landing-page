import { useNavigate } from "react-router-dom";
import { useState } from "react";
function SignUp() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [craving, setcraving] = useState("");
  const [Town, setTown] = useState("");
  const [preference, setpreference] = useState("");
  return (
    <div className="SignUp">
      <form action="" className="common_width">
        <h1>Just a few things... so we can help you!</h1>
        <div className="inputs_area">
          <div className="input_wrapper">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="input_wrapper">
            <label htmlFor="">Okay, what are you craving for?</label>
            <input
              type="text"
              onChange={(e) => {
                setcraving(e.target.value);
              }}
            />
          </div>
          <div className="input_wrapper">
            <label htmlFor="">Town, State, Zip</label>
            <input
              type="text"
              onChange={(e) => {
                setTown(e.target.value);
              }}
            />
          </div>
          <div className="input_wrapper">
            <label>Any dietary preference? </label>
            <input
              type="text"
              onChange={(e) => {
                setpreference(e.target.value);
              }}
            />
          </div>
          <div className="input_wrapper">
            <button
              onClick={(e) => {
                e.preventDefault();

                if (
                  name != "" &&
                  craving != "" &&
                  Town != "" &&
                  preference != ""
                ) {
                  navigate("/Welcome");
                } else {
                  window.alert("Please Fill Form Correctly");
                }
              }}
            >
              💨 I’m ready for it!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
