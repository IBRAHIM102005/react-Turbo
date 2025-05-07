import { createSlice, current } from '@reduxjs/toolkit';

export const newSlice = createSlice({
  name: 'counter',
  initialState: {
    counterVal: 0,
    idArray: [],
  },
  reducers: {
    // increament: (state) => {
    //   state.counterVal += 1;
    //   // console.log(state.counterVal);
    //   // return state.counterVal
    // },
    // decreament: (state) => {
    //   state.counterVal -= 1;
    //   // console.log(state.counterVal);
    //   // return state.counterVal
    // },
    pushArray: (state, action) => {
      state.idArray = state.idArray.includes(action.payload)
        ? [...state.idArray]
        : state.idArray.push(action.payload);
      //   state.idArray.push(action.payload);
      //   state.idArray = [...new Set(state.idArray)];
    },
    removeArray: (state, action) => {
      state.idArray = state.idArray.filter((id) => id !== action.payload);
    },
  },
});
export const { pushArray, removeArray } = newSlice.actions;
export default newSlice.reducer;
