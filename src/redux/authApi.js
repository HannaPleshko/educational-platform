import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/api/auth',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: '/api/reg',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.query({
      query: () => ({
        url: '/api/logout',
      }),
    }),
    allUsers: builder.query({
      query: () => ({
        url: '/api/users',
      }),
      transformResponse: (response) => response,
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useAllUsersQuery, useLogoutQuery } = authApi;
