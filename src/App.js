import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { auth } from "./firebase";
import NavBar from "./components/navBar";
import Home from "./pages/home";
import Login from "./pages/loginpage";
import Registration from "./pages/registrationPage";
import Chat from "./pages/chat/chat";
import Four0four from "./pages/four0four";

function App() {
  // const [currentUser, setcurrentUser] = useState({});
  // useEffect(() => {
  //   const user = auth.currentUser;
  //   setcurrentUser(user);
  // }, []);
  // console.log(currentUser);

  const user = localStorage.getItem("userInfo");
  function PrivateRoute({ path, Component }) {
    return (
      <Route
        path={path}
        render={(props) =>
          user ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/Registration" exact component={Registration} />
          <PrivateRoute path="/chat" Component={Chat} />
          <Route component={Four0four} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
