import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const usersApi = createApi({
    reducerPath: 'allUsers',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    refetchOnFocus: false,
    endpoints: builder => ({
        getAllUsers: builder.query({
            query: url => ({
                url: `${url}`,
            }),
            transformResponse: (response) => response,
        }),

    }),
});

export const { useGetAllUsersQuery } = usersApi


