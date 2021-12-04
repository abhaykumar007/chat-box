import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/login">
        <button>Sign In</button>
      </Link>
      <Link to="/Registration">
        <button>Sign Up</button>
      </Link>
    </div>
  );
}
