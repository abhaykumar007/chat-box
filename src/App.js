import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./pages/home";
import Login from "./pages/loginpage";
import Registration from "./pages/registrationPage";
import Four0four from "./pages/four0four";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/Registration" exact component={Registration} />
          <Route component={Four0four} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
