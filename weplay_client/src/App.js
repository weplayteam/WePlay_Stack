import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import P2PPage from './pages/P2PPage';

function App() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Router>
        <header className={`bg-black text-white p-4 flex flex-row items-center`} >
          <span className={`text-3xl w-24 mr-12`}>Weplay</span>
          <div className={`flex flex-row justify-between w-full`}>
            <ul className={`flex flex-row`}>
              <li className={`mr-4`}><Link to="/">Home</Link></li>
              <li className={`mr-4`}><Link to="/about">About</Link></li>
              <li ><Link to="/p2p">p2p</Link></li>
            </ul>
            <ul className={`flex flex-row`}>
              <li className={`mr-4`}> <Link to="/login">Login</Link> </li>
              <li> <Link to="/signup">Signup</Link> </li>
            </ul>
          </div>
        </header>
        <div className={`container mx-auto`}>
          <Switch>
            <Route exact path="/">
              <HomePage user={{ name: "akash" }} />
            </Route>
            <Route exact path="/about">
              <AboutPage user={{ name: "akash" }} />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/signup">
              <SignupPage />
            </Route>
            <Route exact path="/p2p">
              <P2PPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
