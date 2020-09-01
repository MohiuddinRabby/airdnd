import React from "react";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeDetails from "./components/HomeDetails/HomeDetails";
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Nav></Nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home-details/:keys">
            <HomeDetails></HomeDetails>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
