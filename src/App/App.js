import React from "react";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function AppRouter() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
  );
}

export default AppRouter;