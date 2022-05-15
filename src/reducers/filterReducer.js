import { createSlice } from "@reduxjs/toolkit";

const initialState = {value:""};

const filterReducer = createSlice({
  name: "filterReducer",
  initialState,
  reducers:{
    filter(state, action) {
      return { ...state, value: action.payload };
    }
  }
});


export const { filter } = filterReducer.actions
export default filterReducer.reducer;