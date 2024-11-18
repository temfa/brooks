import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://be.aiteacher.bloombyte.dev/api/v1';
export const mutationApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, {}) => {
      // const token = getCookie('authToken');
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzQzMjUxMjIsInVzZXJfaWQiOiI1YjdiNWJkNS01ZWZmLTQwMmYtOTNjZC0zZDE1MzM5OGM1ODcifQ.xs8G841vYNLXHW_EChQvGJ_RcB6ttweiPgOqzTCQqu4';
      // headers.set('x-api-key', `${process.env.BASE_KEY}`);
      headers.set('Accept', 'application/json');
      headers.set('Content-Type', 'application/json');
      headers.set('Accept-Language', 'en');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    getUserBlogs: builder.mutation({
      query: ({
        page,
        pageSize,
        category,
      }: {
        page: number;
        pageSize: number;
        category: string;
      }) => {
        return {
          url: `/blog/?category=${category}&page=${page}&pageSize=${pageSize}`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const {useGetUserBlogsMutation} = mutationApi;
