import React from "react";
import { logout } from "../../helper/auth";
import { useHistory } from "react-router-dom";

export default function Chat() {
  const history = useHistory();
  const handelSubmit = () => {
    logout();
    localStorage.removeItem("userInfo");
    history.push("/");
  };
  const user = localStorage.getItem("userInfo");

  console.log("chat", user);
  return (
    <div>
      <h3>hey {user} let's chat</h3>
      <button onClick={handelSubmit}>Sign Out</button>
    </div>
  );
}
