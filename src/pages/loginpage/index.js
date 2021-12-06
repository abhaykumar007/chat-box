import React, { useState } from "react";
import { signin } from "../../helper/auth";
import { useHistory, Redirect } from "react-router-dom";
import "./style.css";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(null);
  const history = useHistory();
  // console.log(email, password);

  const handelSubmit = async () => {
    try {
      let info = await signin(email, password);
      console.log("logIn", info.user.email);
      localStorage.setItem("userInfo", info.user.email);
      history.push("/chat");
    } catch (err) {
      seterror(err);
    }
  };
  if (localStorage.getItem("userInfo")) {
    <Redirect to="/chat" />;
  }
  return (
    <>
      <h1>{error?.message}</h1>
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
    </>
  );
}
