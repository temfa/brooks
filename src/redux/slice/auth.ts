import {createSlice} from '@reduxjs/toolkit';
const authSlice = createSlice({
  name: 'auth',
  initialState: false,
  reducers: {
    setAuth: (state, {payload}) => {
      return payload;
    },
    clearAuth: () => {
      return false;
    },
  },
});

const {reducer, actions} = authSlice;
export const {setAuth, clearAuth} = actions;
export default reducer;
