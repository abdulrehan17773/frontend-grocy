import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const proApi = createApi({
    reducerPath: "proApi",
    baseQuery: fetchBaseQuery({baseUrl: "/api"}),
    endpoints: (builder) => ({
        getAll: builder.query({
            query: () => ({
                url: "/pro/getall",
                method: "GET",
            })
        })
    })
})

export const { useGetAllQuery } = proApi;