import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Search from "./pages/Search";
import BooksSaved from "./pages/BooksSaved";
import NoMatch from "./pages/NoMatch";

const App = () => {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={BooksSaved} />
            <Route exact path="/noMatch" component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
}

export default App;