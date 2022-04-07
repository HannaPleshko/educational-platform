import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: builder => ({
        getAccessToken: builder.query({
            query: (url, body) => ({
                url: url,
                method: 'POST',
                body: { body }
            }),
            transformResponse: (response) => response,
        }),
    }),
});

export const { useGetAccessTokenQuery } = authApi