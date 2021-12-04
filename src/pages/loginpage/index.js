import React, { useState } from "react";
import { signin } from "../../helper/auth";
import "./style.css";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  // console.log(email, password);

  const handelSubmit = () => {
    signin(email, password);
  };
  return (
    <div className="container">
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

      <button onClick={handelSubmit}>Sign In</button>
    </div>
  );
}
