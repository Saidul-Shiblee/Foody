import { apiSlice } from "./apiSlice";

export const dashboardApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardInfo: builder.query({
      query: () => ({
        url: `/api/admin/dashboard`,
        method: "GET",
      }),
      providesTags: ["dashboardInfo"],
    }),
  }),
});

export const { useGetDashboardInfoQuery } = dashboardApiSlice;
