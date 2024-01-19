import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const coursesApi = createApi({
  reducerPath: "coursesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5100/",
    // baseUrl: "https://ezra-seminary-api.onrender.com/",
  }),
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "courses",
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useGetCoursesQuery } = coursesApi;
