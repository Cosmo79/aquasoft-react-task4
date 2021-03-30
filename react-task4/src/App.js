import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import React from "react";
import { ProjectList } from "./components/projects/ProjectList";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <ProjectList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}