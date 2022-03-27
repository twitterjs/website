import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type getBranchesResponseType = Array<{
	name: string;
	commit: {
		sha: string;
		url: string;
	};
	protected: boolean;
	protection: {
		required_status_checks: {
			enforcement_level: string;
			contexts: Array<string>;
		};
	};
	protection_url: string;
}>;

export type getTagsResponseType = Array<{
	name: string;
	commit: {
		sha: string;
		url: string;
	};
	zipball_url: string;
	tarball_url: string;
	node_id: string;
}>;

export const githubApi = createApi({
	reducerPath: 'githubApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
	endpoints: builder => ({
		getBranches: builder.query<getBranchesResponseType, string>({
			query: repo => `repos/${repo}/branches`,
		}),
		getTags: builder.query<getTagsResponseType, string>({
			query: repo => `repos/${repo}/tags`,
		}),
	}),
});

export const { useGetBranchesQuery, useGetTagsQuery } = githubApi;
