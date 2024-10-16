import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
   name: 'search',
   initialState: '',
   reducers: {
      searchValue (state, action) {
        return state = action.payload;
      }
   }
});

export const { searchValue } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;