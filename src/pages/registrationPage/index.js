import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { signup } from "../../helper/auth";
import "./style.css";
export default function Registration() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [error, seterror] = useState(null);
  const history = useHistory();
  // console.log(email, password);

  const handelSubmit = async () => {
    try {
      let info = await signup(email, password);
      history.push("/login");
      // console.log("info from registration", info);
    } catch (err) {
      seterror(err);
    }
  };
  // console.log(error);
  if (localStorage.getItem("userInfo")) {
    <Redirect to="/chat" />;
  }
  return (
    <>
      <h1>{error?.message}</h1>
      <div className="container">
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
        <div>
          <button onClick={handelSubmit}>Sign Up</button>
        </div>
      </div>
    </>
  );
}
