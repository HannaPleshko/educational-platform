import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksApi = createApi({
  reducerPath: 'tasks',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: (url) => ({
        url: `${url}`,
      }),
      transformResponse: (response) => response,
    }),
    createTask: builder.mutation({
      query: (credentials) => ({
        url: '/task',
        method: 'POST',
        body: credentials,
      }),
    }),
    updateTask: builder.mutation({
      query: (credentials) => ({
        url: `/task/${credentials.id}`,
        method: 'POST',
        body: credentials,
      }),
    }),
    deleteTask: builder.mutation({
      query: (credentials) => ({
        url: `/task/del/${credentials.id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const { useCreateTaskMutation, useDeleteTaskMutation, useGetTasksQuery, useUpdateTaskMutation} = tasksApi;
