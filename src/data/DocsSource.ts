import { lt } from 'semver';

interface DocsSourceOptions {
	id: string;
	docsRepo: string;
	sourceRepo: string;
	defaultVersion?: string;
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
	docsRepo: string;
	sourceRepo: string;
	defaultVersion: string;
	source: string;
	branchFilter: (branch: string) => boolean;
	tagFilter: (tag: string) => boolean;
	versions: Array<string> | null;

	constructor(options: DocsSourceOptions) {
		this.id = options.id;
		this.docsRepo = options.docsRepo;
		this.sourceRepo = options.sourceRepo;
		this.defaultVersion = options.defaultVersion ?? 'main';
		this.source = options.source ?? `https://github.com/${this.sourceRepo}/blob/`;
		this.branchFilter = options.branchFilter ?? ((branch: string) => branch !== 'main');
		this.tagFilter =
			options.tagFilter ??
			((tag: string) => !lt(tag.replace(/(^@\w+\/\w+@v?)?(?<semver>\d+.\d+.\d+)-?.*/, '$<semver>'), '0.0.0'));
		this.versions = null;
	}
}
