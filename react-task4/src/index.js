import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { fetchProjects } from "./components/projects/projectsSlice";
import { fetchEmployees } from "./components/employees/employeesSlice";
import store from "./store";

store.dispatch(fetchProjects());
store.dispatch(fetchEmployees());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);