import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        temperature: 0,
        hasPercipitation: false,
        forecast: ''
    },
    reducers: {
        setWeather: (state, action) => {
            state.hasPercipitation = action.payload.HasPercipitation;
            state.temperature = action.payload.Temperature.Imperial.Value;
            state.forecast = action.payload.WeatherText;
        }
    }
});

export const { setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;