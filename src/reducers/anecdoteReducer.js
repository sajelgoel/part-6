import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdoteService";
import { showNotification } from './notificationReducer';

const initialState = [];

const anecdoteSlice = createSlice({
  name: "anecdoteReducer",
  initialState,
  reducers: {
    addNew(state, action) {
      return [...state, action.payload];
    },
    voted(state, action) {
      return state
        .map((value) =>
          value.id === action.payload
            ? { ...value, votes: value.votes + 1 }
            : value
        )
        .sort((a, b) => b.votes - a.votes);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { addNew, voted, setAnecdotes } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdotes = (content) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.createNew(content);
    dispatch(addNew(anecdote));
  };
};

export const addVote = (content) => {
  return async (dispatch) => {
    await anecdoteService.addVote(content);
    dispatch(voted(content.id));
    dispatch(showNotification(` you voted '${content.content}'`, 10));
  };
};

export default anecdoteSlice.reducer;
