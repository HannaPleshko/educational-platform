import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { lessonsApi } from './lessonsApi'

export const store = configureStore({
  reducer: {
    [lessonsApi.reducerPath]: lessonsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lessonsApi.middleware),
})

setupListeners(store.dispatch)