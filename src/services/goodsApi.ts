import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types';

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://test-frontend.dev.int.perx.ru/api/',
  }),
  endpoints: (builder) => ({
    fetchGoods: builder.query<Product[], string | void>({
      query: (dealers) => {
        return dealers ? `goods/?dealers=${dealers}` : 'goods/';
      },
    }),
    fetchDealers: builder.query<string[], void>({
      query: () => 'dealers/',
    }),
  }),
});

export const { useFetchGoodsQuery, useFetchDealersQuery } = goodsApi;
