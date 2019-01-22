import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Post from "./components/Post";
import Quote from "./components/Quote";
import Todo from "./components/todo/Todo";
import Calculator from "./components/calculator/Calculator";
import Pomodoro from "./components/pomodoro/Pomodoro";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/quote" component={Quote} />
            <Route path="/todos" component={Todo} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/pomodoro" component={Pomodoro} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
