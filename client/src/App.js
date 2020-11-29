import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/noMatch" component={NoMatch} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

// import logo from "./logo.svg";

{/* <div className="App">
<div className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h2>Welcome to React</h2>
</div>
<p className="App-intro">
  To get started, edit <code>src/App.js</code> and save to reload.
</p>
</div> */}