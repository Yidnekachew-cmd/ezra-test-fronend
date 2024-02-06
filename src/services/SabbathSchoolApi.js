import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sabbath-school-stage.adventech.io/api/v2/",
  }),
  endpoints: (builder) => ({
    getSSLs: builder.query({
      query: () => "am/quarterlies/index.json",
    }),
    getSSLOfQuarter: builder.query({
      query: (path) => `${path}/index.json`,
    }),
  }),
});

export const { useGetSSLsQuery, useGetSSLOfQuarterQuery } = api;
