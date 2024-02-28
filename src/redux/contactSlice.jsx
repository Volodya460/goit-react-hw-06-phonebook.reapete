import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  contacts: [],
  filter: '',
};
export const contactSlice = createSlice({
  name: 'contact',
  initialState: initialState,

  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deletContact: (state, action) => {
      // const index = state.contacts.findIndex(
      //   contact => contact.id === action.payload
      // );
      // state.contacts.splice(index, 1);
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },
    filterChange: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deletContact, filterChange } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
