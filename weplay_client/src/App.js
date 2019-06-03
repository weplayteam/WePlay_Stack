import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

import HomePage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          {"This is the main app components"}
        </header>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>
        <Switch>
          <Route exact path="/">
            <HomePage user={{ name: "akash" }} />
          </Route>
          <Route exact path="/about">
            <AboutPage user={{ name: "akash" }} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
