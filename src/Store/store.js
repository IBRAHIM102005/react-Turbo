import { configureStore } from "@reduxjs/toolkit";
import { newSlice } from "./Slices/newSlice";
import newSliceReducer from './Slices/newSlice'

const store=configureStore({
    reducer:{
        counter: newSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    
      devTools: process.env.NODE_ENV !== 'production',
})

export default store;