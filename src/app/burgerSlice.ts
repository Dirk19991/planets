import { createSlice } from '@reduxjs/toolkit';

export interface Burger {
  isOpened: boolean;
}

const initialState: Burger = {
  isOpened: false,
};

const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    setOpenMenu(state, action) {
      state.isOpened = action.payload;
    },
  },
});

export default burgerSlice.reducer;

export const { setOpenMenu } = burgerSlice.actions;
