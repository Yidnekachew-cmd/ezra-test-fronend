import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ezra-seminary-api.onrender.com",
    prepareHeaders: (headers) => {
      // Get the user from localStorage
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user ? user.token : "";
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json"); // changed to application/json
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: JSON.stringify(credentials), // stringified the credentials
      }),
    }),
    getDevotions: builder.query({
      query: () => ({
        url: "/devotion/show",
      }),
    }),
    createDevotion: builder.mutation({
      query: (newDevotion) => ({
        url: "/devotion/create",
        method: "POST",
        body: JSON.stringify(newDevotion), // stringified the newDevotion
      }),
    }),
    updateDevotion: builder.mutation({
      query: ({ id, updatedDevotion }) => ({
        url: `/devotion/${id}`,
        method: "PUT",
        body: updatedDevotion,
      }),
    }),
    deleteDevotion: builder.mutation({
      query: (id) => ({
        url: `/devotion/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetDevotionsQuery,
  useCreateDevotionMutation,
  useUpdateDevotionMutation,
  useDeleteDevotionMutation,
} = apiSlice;
