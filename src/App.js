import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Login from "./components/Login";
import Register from "./components/Register";
import Redirects from "./components/Redirects";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/features">
          <Features />
        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id">
          <Redirects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
