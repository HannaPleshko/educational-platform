import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'lessonsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    getLessons: builder.query({
      query: () => `lesson/4`,
    }),
  }),
})

export const { useGetLessonsQuery } = api