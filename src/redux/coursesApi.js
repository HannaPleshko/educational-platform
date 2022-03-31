import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const coursesApi = createApi({
    reducerPath: 'courses',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    refetchOnFocus: true,
    endpoints: builder => ({
        getCourses: builder.query({
            query: url => ({
                url: `${url}`,
            }),
            transformResponse: (response) => response,
        }),

    }),
});

export const { useGetCoursesQuery } = coursesApi


