import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { lessonsApi } from './lessonsApi'
import { coursesApi } from './coursesApi'

export const store = configureStore({
  reducer: {
    [lessonsApi.reducerPath]: lessonsApi.reducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return (
      getDefaultMiddleware().concat(lessonsApi.middleware),
      getDefaultMiddleware().concat(coursesApi.middleware)
    )
  }
})

setupListeners(store.dispatch)