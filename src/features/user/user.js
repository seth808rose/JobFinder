import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  user: null,
};

const user = createSlice({
  name: "user",
  initialState,
});

export default user.reducer;
