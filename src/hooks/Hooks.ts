import { skipToken } from '@reduxjs/toolkit/dist/query';
import { SourceIdType, Sources } from '../data';
import { useGetBranchesQuery, useGetTagsQuery } from '../store/GithubApi';
import { major, minor, patch, valid } from 'semver';

export function useGetVersionsQuery(sourceId: string) {
	const docsSource = Sources[sourceId as SourceIdType];
	const { data: branches, isSuccess } = useGetBranchesQuery(docsSource.sourceRepo);
	const { data: tags } = useGetTagsQuery(isSuccess ? docsSource.sourceRepo : skipToken);

	const versions: Array<string> = [docsSource.defaultVersion];
	const latestPatches: { [key: string]: number } = {};

	if (!branches || !tags) return versions;

	for (const branch of branches) {
		if (branch.name !== docsSource.defaultVersion && docsSource.branchFilter(branch.name)) {
			versions.push(branch.name);
		}
	}

	for (const tag of tags) {
		if (valid(tag.name)) {
			const majorDotMinor = `${major(tag.name)}.${minor(tag.name)}`;
			const patchNumber = patch(tag.name);
			if (patchNumber < latestPatches[majorDotMinor]) {
				continue;
			}
			latestPatches[majorDotMinor] = patchNumber;
		}
	}

	for (const tag of tags) {
		if (tag.name === docsSource.defaultVersion || !docsSource.tagFilter(tag.name)) {
			continue;
		}
		if (valid(tag.name)) {
			const majorDotMinor = `${major(tag.name)}.${minor(tag.name)}`;
			const patchNumber = patch(tag.name);
			if (patchNumber < latestPatches[majorDotMinor]) {
				continue;
			}
		}
		versions.push(tag.name);
	}
	return versions;
}
