import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';
import bookingReducer from './slices/bookingSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    booking: bookingReducer,
  },
});
export interface BookingState {
  selectedDate: string;
  selectedActivity?: string;
}



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;