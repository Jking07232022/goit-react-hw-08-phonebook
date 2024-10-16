import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handleOnPending = state => {
   state.isLoading = true;
   state.isError = null;
}

const handleOnReject = (state, action) => {
   state.isLoading = false;
   state.isError = action.payload;
}

export const contactsSlice = createSlice({
   name: 'contacts',
   initialState: {
      item: [],
      isLoading: false,
      isError: null,
   },
   extraReducers: builder => {
      builder
         .addCase(fetchContacts.pending, handleOnPending)
         .addCase(fetchContacts.fulfilled, (state, action) => {
            state.item = action.payload;
            state.isLoading = false;
            state.isError = null;
         })
         .addCase(fetchContacts.rejected, handleOnReject)
         .addCase(addContact.pending, handleOnPending)
         .addCase(addContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.item.push(action.payload);
            state.isError = null;
         })
         .addCase(addContact.rejected, handleOnReject)
         .addCase(deleteContact.pending, handleOnPending)
         .addCase(deleteContact.fulfilled, (state, action) => {
            const index = state.item.findIndex(contact => contact.id === action.payload.id);
            state.item.splice(index, 1);
            state.isLoading = false;
            state.isError = null;
         })
         .addCase(deleteContact.rejected, handleOnReject)
   }
});

export const contactsReducer = contactsSlice.reducer;