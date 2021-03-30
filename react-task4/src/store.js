import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./components/projects/projectsSlice";

export default configureStore({
  reducer: {
    projects: projectsReducer,
  },
});