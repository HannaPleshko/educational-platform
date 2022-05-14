import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { lessonsApi } from './lessonsApi';
import { coursesApi } from './coursesApi';
import { topicsApi } from './topicsApi';
import { authApi } from './authApi';
import { tasksApi } from './taskApi';

export const store = configureStore({
  reducer: {
    [lessonsApi.reducerPath]: lessonsApi.reducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
    [topicsApi.reducerPath]: topicsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([lessonsApi.middleware, coursesApi.middleware, topicsApi.middleware, authApi.middleware, tasksApi.middleware]),
});

setupListeners(store.dispatch);
