import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import NotFound from './components/NotFound/NotFound';
import Destination from './components/Destination/Destination';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const [loginUserDetails, setLoginUserDetails] = useState({
    isSignIn: false,
    name: '',
    email: '',
    photo: '',
    uid: null,
    errMessage: ''
  });
  return (
    <UserContext.Provider value={[loginUserDetails, setLoginUserDetails]}>
      <Router>
        <div className="app-root">
          <Header></Header>
          <Switch>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route path="/destination/:methodName">
              <Destination></Destination>
            </Route>
            <Route path="/destination">
              <Redirect to="/destination/bike">
              </Redirect>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Router path="*">
              <NotFound></NotFound>
            </Router>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
