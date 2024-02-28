import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, deletContact, filterChange } = contactSlice.actions;
