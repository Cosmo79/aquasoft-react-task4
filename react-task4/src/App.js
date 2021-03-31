import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import React from "react";
import { ProjectList } from "./components/projects/ProjectList";
import { EmployeeList } from "./components/employees/EmployeeList";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <ProjectList />
          </Route>
          <Route path="/view-employees">
            <EmployeeList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}