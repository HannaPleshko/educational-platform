import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'lessons',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    refetchOnFocus: true,  
    endpoints: builder => ({
        read: builder.query({
            query: url => ({
                url: `${url}`,
            }),
            transformResponse: (response) => response,
        }),
       
    }),
});

export const { useReadQuery } = api


