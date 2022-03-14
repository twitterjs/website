import { lt, major, minor, patch, valid } from 'semver';
// import type { Documentation } from '../typings/Docs';

interface DocsSourceOptions {
	id: string;
	// name: string;
	// global: string;
	docsRepo: string;
	sourceRepo: string;
	defaultVersion?: string;
	defaultFile?: { category: string; id: string };
	source?: string;
	branchFilter?: (branch: string) => boolean;
	tagFilter?: (tag: string) => boolean;
}

export const json = (res: Response) => {
	if (!res.ok) throw new Error('Failed to fetch data from GitHub');
	return res.json();
};

export class DocsSource {
	id: string;
	// name: string;
	// global: string;
	docsRepo: string;
	sourceRepo: string;
	defaultVersion: string;
	defaultFile: { category: string; id: string };
	source: string;
	branchFilter: (branch: string) => boolean;
	tagFilter: (tag: string) => boolean;
	versions: Array<string> | null;

	constructor(options: DocsSourceOptions) {
		this.id = options.id;
		// this.name = options.name;
		// this.global = options.global;
		this.docsRepo = options.docsRepo;
		this.sourceRepo = options.sourceRepo;
		this.defaultVersion = options.defaultVersion ?? 'main';
		this.defaultFile = options.defaultFile ?? { category: 'general', id: 'welcome' };
		this.source = options.source ?? `https://github.com/${this.sourceRepo}/blob/`;
		this.branchFilter = options.branchFilter ?? ((branch: string) => branch !== 'main');
		this.tagFilter =
			options.tagFilter ??
			((tag: string) => !lt(tag.replace(/(^@\w+\/\w+@v?)?(?<semver>\d+.\d+.\d+)-?.*/, '$<semver>'), '0.0.0'));
		this.versions = null;
	}

	// async fetchVersions() {
	// 	if (this.versions) return Promise.resolve(this.versions);
	// 	return Promise.all([
	// 		fetch(`https://api.github.com/repos/${this.repo}/branches`).then(json),
	// 		fetch(`https://api.github.com/repos/${this.repo}/tags`).then(json),
	// 	])
	// 		.catch(err => {
	// 			if (localStorage[`source-${this.id}`]) {
	// 				console.error(err);
	// 				const cache = JSON.parse(localStorage[`source-${this.id}`]);
	// 				return [cache.branches, cache.tags];
	// 			}
	// 			throw err;
	// 		})
	// 		.then(data => {
	// 			const [branches, tags] = data;
	// 			this.versions = [this.defaultVersion];
	// 			localStorage[`source-${this.id}`] = JSON.stringify({ branches, tags });

	// 			for (const branch of branches) {
	// 				if (branch.name !== this.defaultVersion && this.branchFilter(branch.name)) {
	// 					this.versions.push(branch.name);
	// 				}
	// 			}

	// 			const latestPatches: { [key: string]: number } = {};
	// 			for (const tag of tags) {
	// 				if (valid(tag.name)) {
	// 					const majorDotMinor = `${major(tag.name)}.${minor(tag.name)}`;
	// 					const patchNumber = patch(tag.name);
	// 					if (patchNumber < latestPatches[majorDotMinor]) {
	// 						continue;
	// 					}
	// 					latestPatches[majorDotMinor] = patchNumber;
	// 				}
	// 			}

	// 			for (const tag of tags) {
	// 				if (tag.name === this.defaultVersion || !this.tagFilter(tag.name)) {
	// 					continue;
	// 				}
	// 				if (valid(tag.name)) {
	// 					const majorDotMinor = `${major(tag.name)}.${minor(tag.name)}`;
	// 					const patchNumber = patch(tag.name);
	// 					if (patchNumber < latestPatches[majorDotMinor]) {
	// 						continue;
	// 					}
	// 				}
	// 				this.versions.push(tag.name);
	// 			}
	// 			return this.versions;
	// 		});
	// }

	// async fetchDocs(version: string): Promise<Documentation> {
	// 	const res = await fetch(`https://raw.githubusercontent.com/${this.docsRepo}/main/${this.id}/${version}.json`);
	// 	return json(res);
	// }
}
