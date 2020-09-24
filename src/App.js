import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking';
import Hotels from './components/Hotel/Hotels';
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext();

function App() {
  const [loggedInUSer, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUSer, setLoggedInUser]}>
      <div className= 'App'>
      <Router>
      <Header />
          <Switch>
            <Route path="/home">
            <Home />
            </Route>
            <Route path="/booking/:id">
            <Booking />
            </Route>
            <PrivateRoute exact path="/hotels/:name">
              <Hotels />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path ="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
      </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
