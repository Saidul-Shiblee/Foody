import { apiSlice } from "./apiSlice";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => "/api/admin/orders",
      keepUnusedDataFor: 5,
      providesTags: "orders",
    }),
  }),
});

export const { useGetOrdersQuery } = ordersApiSlice;
