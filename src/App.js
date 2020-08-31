import React from "react";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Nav></Nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
