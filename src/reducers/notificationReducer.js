import { createSlice } from "@reduxjs/toolkit";

const initialState = {content:"", show: false};

const notificationReducer = createSlice({
  name: "notificationReducer",
  initialState,
  reducers:{
    show(state, action) {
      return {...state, content:action.payload, show: true};
    },
    remove(state, action){
      return {...state, show: action.payload, content:''} ;
    }
  }
});


export const { remove, show } = notificationReducer.actions

export const showNotification = (message, time) => {
  return async (dispatch) => {
    dispatch(show(message));
  setTimeout(()=>{dispatch(remove(""))},time*1000)
  };

  
}
export default notificationReducer.reducer;