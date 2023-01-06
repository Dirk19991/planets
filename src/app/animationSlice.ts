import { createSlice } from '@reduxjs/toolkit';

export interface PlanetIsOnscreen {
  isActivePlanet: boolean;
  isActiveInfoType: boolean;
}

const initialState: PlanetIsOnscreen = {
  isActivePlanet: false,
  isActiveInfoType: false,
};

const animationSlice = createSlice({
  name: 'animation',
  initialState,
  reducers: {
    setActivePlanet(state, action) {
      state.isActivePlanet = action.payload;
    },
    setActiveInfoType(state, action) {
      state.isActiveInfoType = action.payload;
    },
  },
});

export default animationSlice.reducer;

export const { setActivePlanet, setActiveInfoType } = animationSlice.actions;
