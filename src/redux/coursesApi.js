import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const coursesApi = createApi({
  reducerPath: 'courses',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: (url) => ({
        url: `${url}`,
      }),
      transformResponse: (response) => response,
    }),
    createCourse: builder.mutation({
      query: (credentials) => ({
        url: '/course',
        method: 'POST',
        body: credentials,
      }),
    }),
    updateCourse: builder.mutation({
      query: (credentials) => ({
        url: `/course/${credentials.id}`,
        method: 'POST',
        body: credentials,
      }),
    }),
    deleteCourse: builder.mutation({
      query: (credentials) => ({
        url: `/course/del/${credentials.id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const { useGetCoursesQuery, useCreateCourseMutation, useUpdateCourseMutation, useDeleteCourseMutation } = coursesApi;
