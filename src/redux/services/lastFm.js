import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const musicApi = createApi({
  reducerPath: 'musicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ws.audioscrobbler.com/2.0',
  }),
  endpoints: (builder) => ({
    getMusicData: builder.query({
      query: () => ({
        url: '',
        params: {
          method: 'chart.gettoptracks',
          api_key: 'f29dc2cf26acf621453f693545703bb7',
          format: 'json',
        },
      }),
    }),
  }),
});

export const { useGetMusicDataQuery } = musicApi;