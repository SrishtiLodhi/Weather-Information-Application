import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  location: string;
}

const initialState: WeatherState = {
  location: '',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = weatherSlice.actions;
export default weatherSlice.reducer;
