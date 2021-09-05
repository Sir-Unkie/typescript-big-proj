import { configureStore } from '@reduxjs/toolkit';
import repositoriesReducer from './repositoriesSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
