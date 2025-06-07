import { configureStore } from '@reduxjs/toolkit';
import DataReducer from '../reduxs/DataSlice';

const store = configureStore({
  reducer: {
    data: DataReducer,  
  },
});

export default store;
