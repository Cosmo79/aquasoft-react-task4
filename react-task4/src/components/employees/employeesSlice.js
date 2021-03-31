import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEmployees = createAsyncThunk("fetchEmployees", async () => {
  const response = await fetch("http://localhost:3000/employees");
  const employees = await response.json();
  return employees;
});

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchEmployees.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchEmployees.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = [...state.entities, ...action.payload];
    },
    [fetchEmployees.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default employeesSlice.reducer;