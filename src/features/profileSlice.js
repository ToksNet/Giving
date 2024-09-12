import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profiles: JSON.parse(localStorage.getItem('profiles')) || [],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addProfile: (state, action) => {
      state.profiles.push(action.payload); 
      localStorage.setItem('profiles', JSON.stringify(state.profiles)); 
    },
  },
});

export const { addProfile } = profileSlice.actions;
export default profileSlice.reducer;
