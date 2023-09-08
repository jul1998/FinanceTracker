import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlicer';



const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;