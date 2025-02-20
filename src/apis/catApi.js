import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const catApi = createApi({
    reducerPath: "catApi",
    baseQuery: fetchBaseQuery({baseUrl: "/api"}),
    endpoints: (builder) => ({
        getCat: builder.query({
            query: () => ({
                url: "/cat/getall",
                method: "GET"
            })
        })
    })
})

export const { useGetCatQuery } = catApi;
 