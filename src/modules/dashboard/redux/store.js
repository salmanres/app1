import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './actions'

export const appStore = configureStore({

    reducer: {
        counter: counterReducer,
      },


})