import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Planet =
  | 'Mercury'
  | 'Venus'
  | 'Earth'
  | 'Mars'
  | 'Jupiter'
  | 'Saturn'
  | 'Uranus'
  | 'Neptune';

export type InfoType = 'overview' | 'internal' | 'surface';

export interface MainInfo {
  planet: Planet;

  infoType: InfoType;
}

const initialState: MainInfo = {
  planet: 'Earth',
  infoType: 'overview',
};

const mainInfoSlice = createSlice({
  name: 'mainInfo',
  initialState,
  reducers: {
    setPlanet(
      state,
      action: PayloadAction<{ planet?: Planet; infoType: InfoType }>
    ) {
      if (action.payload.planet) {
        state.planet = action.payload.planet;
      }
      state.infoType = action.payload.infoType;
    },
  },
});

export default mainInfoSlice.reducer;

export const { setPlanet } = mainInfoSlice.actions;
