import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IAPIRequest, IGame } from '../interfaces/card';

const key = '90a7c29c997c49589b8db727a87a7270';

type queryParams = {
  search: string;
  page_size?: number;
};

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.rawg.io/api' }),
  endpoints: (builder) => ({
    getGames: builder.query<IAPIRequest, queryParams>({
      query: ({ search, page_size = 50 }: queryParams) => ({
        url: '/games',
        params: {
          key: key,
          search: search,
          page_size: page_size,
        },
      }),
    }),
    getGame: builder.query<IGame, number>({
      query: (id: number) => ({
        url: `/games/${id}`,
        params: {
          key: key,
        },
      }),
    }),
  }),
});

export const { useGetGamesQuery, useGetGameQuery } = gamesApi;
