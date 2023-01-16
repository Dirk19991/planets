import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PlanetIsOnscreen {
  isActivePlanet: boolean;
  isActiveInfoType: boolean;
}

const initialState: PlanetIsOnscreen = {
  isActivePlanet: true,
  isActiveInfoType: true,
};

const animationSlice = createSlice({
  name: 'animation',
  initialState,
  reducers: {
    animatePlanet(state, action: PayloadAction<boolean>) {
      state.isActivePlanet = action.payload;
    },
    animateInfoType(state, action: PayloadAction<boolean>) {
      state.isActiveInfoType = action.payload;
    },
  },
});

export default animationSlice.reducer;

export const { animatePlanet, animateInfoType } = animationSlice.actions;
