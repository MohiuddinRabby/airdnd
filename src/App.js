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
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
const App = () => {
  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
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
                <Elements stripe={stripePromise}>
                  <ConfirmCart></ConfirmCart>
                </Elements>
              </PrivateRoute>
            </Switch>
          </InfoProvider>
        </AuthProvider>
      </Router>
    </React.Fragment>
  );
};

export default App;
