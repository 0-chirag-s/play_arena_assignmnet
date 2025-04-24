import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingState {
  selectedDate: string;
  selectedActivity: string | null;
}

const initialState: BookingState = {
  selectedDate: new Date().toISOString().split('T')[0],
  selectedActivity: null,
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    setSelectedActivity: (state, action: PayloadAction<string | null>) => {
      state.selectedActivity = action.payload;
    },
  },
});

export const { setSelectedDate, setSelectedActivity } = bookingSlice.actions;
export default bookingSlice.reducer;