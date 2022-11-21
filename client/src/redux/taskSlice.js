import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTask: null,
  loading: false,
  error: false,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.currentProject = action.payload;
    },
    fetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure} =
  taskSlice.actions;

export default taskSlice.reducer;