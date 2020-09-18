import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HS5BHB8UiAjb0EH78kdTeooh9HI8O8054Yk4rXxdTMhLwBE9XesESKnLzTEeucE8xDmx19tqO5PW8iLIFQtC7Xm00O0gemzhH"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //only run once when the app component loads because the bracket is empty
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER", authUser);

      //the user just logged in/the user was logged in
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }

      //the user is logged out
      else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
