import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const lessonsApi = createApi({
  reducerPath: 'lessons',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getLessons: builder.query({
      query: (url) => ({
        url: `${url}`,
      }),
      transformResponse: (response) => response,
    }),
    createLesson: builder.mutation({
      query: (credentials) => ({
        url: '/lesson',
        method: 'POST',
        body: credentials,
      }),
    }),
    updateLesson: builder.mutation({
      query: (credentials) => ({
        url: `/lesson/${credentials.id}`,
        method: 'POST',
        body: credentials,
      }),
    }),
    deleteLesson: builder.mutation({
      query: (credentials) => ({
        url: `/lesson/del/${credentials.id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const { useGetLessonsQuery, useCreateLessonMutation, useUpdateLessonMutation, useDeleteLessonMutation } = lessonsApi;
