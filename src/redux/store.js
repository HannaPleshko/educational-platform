import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { lessonsApi } from './lessonsApi'
import { coursesApi } from './coursesApi'
import { topicsApi } from './topicsApi'

export const store = configureStore({
  reducer: {
    [lessonsApi.reducerPath]: lessonsApi.reducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
    [topicsApi.reducerPath]: topicsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([lessonsApi.middleware, coursesApi.middleware, topicsApi.middleware])
})

setupListeners(store.dispatch)