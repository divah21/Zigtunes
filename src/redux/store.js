import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './features/playerSlice';
import { musicApi } from './services/lastFm';

export const store = configureStore({
  reducer: {
     // Use musicApi.reducerPath and musicApi.reducer
    [musicApi.reducerPath]: musicApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
   // Use musicApi.middleware
    getDefaultMiddleware().concat(musicApi.middleware),
});
