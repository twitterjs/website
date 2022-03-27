import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Documentation } from '../typings/Docs';

interface getDocsQueryType {
	docsRepo: string;
	sourceId: string;
	version: string;
}

export const docsApi = createApi({
	reducerPath: 'docsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://raw.githubusercontent.com/' }),
	endpoints: builder => ({
		getDocs: builder.query<Documentation, getDocsQueryType>({
			query: ({ docsRepo, sourceId, version }) => `${docsRepo}/main/${sourceId}/${version}.json`,
		}),
	}),
});

export const { useGetDocsQuery } = docsApi;
