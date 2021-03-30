import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk("fetchProjects", async () => {
  const response = await fetch("http://localhost:3000/projects");
  const projects = await response.json();
  return projects;
});


const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchProjects.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchProjects.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = [...state.entities, ...action.payload];
    },
    [fetchProjects.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default projectsSlice.reducer;