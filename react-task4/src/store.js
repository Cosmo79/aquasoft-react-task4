import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./components/projects/projectsSlice";
import employeesReducer from "./components/employees/employeesSlice"

export default configureStore({
  reducer: {
    projects: projectsReducer,
    employees: employeesReducer,
  },
});