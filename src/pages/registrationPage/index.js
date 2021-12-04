import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { signup } from "../../helper/auth";
import "./style.css";
export default function Registration() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [error, seterror] = useState("");
  const history = useHistory();
  // console.log(email, password);

  const handelSubmit = async () => {
    try {
      await signup(email, password);
      history.push("/login");
    } catch (err) {
      seterror(err);
    }
  };
  console.log(error);
  return (
    <div className="container">
      {error ? (
        <h2>{error}</h2>
      ) : (
        <div>
          <div className="sub-container">
            <label> Enter the Name</label>
            <input
              placeholder="Enter Name"
              onChange={(e) => setname(e.target.value)}
            />
          </div>

          <div className="sub-container">
            <label> Enter the Email</label>
            <input
              placeholder="Enter Email"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div className="sub-container">
            <label> Enter the Password</label>
            <input
              placeholder="Enter Password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <button onClick={handelSubmit}>Sign Up</button>
        </div>
      )}
    </div>
  );
}
