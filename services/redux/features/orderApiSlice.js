import { apiSlice } from "./apiSlice";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => "/api/admin/orders",
      providesTags: "orders",
    }),
  }),
});

export const { useGetOrdersQuery } = ordersApiSlice;
