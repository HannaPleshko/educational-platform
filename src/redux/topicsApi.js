import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const topicsApi = createApi({
  reducerPath: 'topics',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getTopics: builder.query({
      query: (url) => ({
        url: `${url}`,
      }),
      transformResponse: (response) => response,
    }),
    createTopic: builder.mutation({
      query: (credentials) => ({
        url: '/topic',
        method: 'POST',
        body: credentials,
      }),
    }),
    updateTopic: builder.mutation({
      query: (credentials) => ({
        url: `/topic/${credentials.id}`,
        method: 'POST',
        body: credentials,
      }),
    }),
    deleteTopic: builder.mutation({
      query: (credentials) => ({
        url: `/topic/del/${credentials.id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const { useGetTopicsQuery, useCreateTopicMutation, useUpdateTopicMutation, useDeleteTopicMutation } = topicsApi;
