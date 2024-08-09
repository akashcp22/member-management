import { createSlice } from '@reduxjs/toolkit';

export const memberSlice = createSlice({
  name: 'members',
  initialState: [],
  reducers: {
    addMember: (state, action) => {
      state.push({ id: Date.now(), ...action.payload });
    },
    removeMember: (state, action) => {
      return state.filter(member => member.id !== action.payload);
    },
    editMember: (state, action) => {
      const index = state.findIndex(member => member.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload.updates };
      }
    },
  },
});

export const { addMember, removeMember, editMember } = memberSlice.actions;
export default memberSlice.reducer;
