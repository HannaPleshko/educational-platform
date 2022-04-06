import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const topicsApi = createApi({
    reducerPath: 'topics',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    refetchOnFocus: true,
    endpoints: builder => ({
        getTopics: builder.query({
            query: url => ({
                url: `${url}`,
            }),
            transformResponse: (response) => response,
        }),

    }),
});

export const { useGetTopicsQuery } = topicsApi


