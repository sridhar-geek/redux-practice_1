import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "Learning Redux/toolkit",
    content: "Started learning redux toolkit by following youtube",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      like: 0,
      love: 0,
      laugh: 0,
      fire: 0,
    },
  },
  {
    id: 2,
    title: "Practicing Redux",
    content: "Building Project to get sharp understanding of it",
    date: sub(new Date(), { minutes: 2 }).toISOString(),
    reactions: {
      like: 0,
      love: 0,
      laugh: 0,
      fire: 0,
    },
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare (title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            data: new Date().toISOString(),
            userId,
            reactions: {
              like: 0,
              love: 0,
              laugh: 0,
              fire: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action){
      const {postId, reaction} = action.payload
      const existingPost = state.find(post => post.id === postId)
      if(existingPost)
        existingPost.reactions[reaction]++
    }
  },
});

export const { postAdded, reactionAdded } = postSlice.actions;
export default postSlice.reducer;
