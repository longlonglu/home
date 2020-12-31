import React from "react"
import ReactDOM from "react-dom"
import { createBrowserHistory } from "history"
import { Router, Route, Switch } from "react-router-dom"
import Home from "views/Home/Home.js"
import About from "views/About/About.js"
import Project from "views/Project/Project.js"

var hist = createBrowserHistory()

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/project" component={Project} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
)
