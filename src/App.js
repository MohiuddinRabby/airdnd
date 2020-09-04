import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Result from "./components/Result/Result";
import ResultDataDetails from "./components/ResultDataDetails/ResultDataDetails";
import { InfoProvider } from "./global/InfoContext";
import Login from "./components/Login/Login";
import { AuthProvider, PrivateRoute } from "./global/useAuth";
import ConfirmCart from "./components/ConfirmCart/ConfirmCart";
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <AuthProvider>
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
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute path="/confirm-order">
                <ConfirmCart></ConfirmCart>
              </PrivateRoute>
            </Switch>
          </InfoProvider>
        </AuthProvider>
      </Router>
    </React.Fragment>
  );
};

export default App;
