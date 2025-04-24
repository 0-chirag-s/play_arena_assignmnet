import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  activeMenu: string | null;
  mobileMenuOpen: boolean;
  animationsEnabled: boolean;
}

const initialState: UiState = {
  activeMenu: null,
  mobileMenuOpen: false,
  animationsEnabled: true,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveMenu: (state, action: PayloadAction<string | null>) => {
      state.activeMenu = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setAnimationsEnabled: (state, action: PayloadAction<boolean>) => {
      state.animationsEnabled = action.payload;
    },
  },
});

export const { setActiveMenu, toggleMobileMenu, setAnimationsEnabled } = uiSlice.actions;
export default uiSlice.reducer;
