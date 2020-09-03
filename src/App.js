import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Result from "./components/Result/Result";
import ResultDataDetails from "./components/ResultDataDetails/ResultDataDetails";
import { InfoProvider } from "./global/InfoContext";
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <InfoProvider>
          <Nav></Nav>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/results">
              <Result></Result>
            </Route>
            <Route path="/house-details/:keys">
              <ResultDataDetails></ResultDataDetails>
            </Route>
          </Switch>
        </InfoProvider>
      </Router>
    </React.Fragment>
  );
};

export default App;
