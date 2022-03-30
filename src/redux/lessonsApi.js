import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const lessonsApi = createApi({
    reducerPath: 'lessons',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    refetchOnFocus: true,
    endpoints: builder => ({
        getLessons: builder.query({
            query: url => ({
                url: `${url}`,
            }),
            transformResponse: (response) => response,
        }),

    }),
});

export const { useGetLessonsQuery } = lessonsApi


