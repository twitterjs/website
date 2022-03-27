import { lt } from 'semver';
import { DocsSource } from './DocsSource';

export const twitterTypesSource = new DocsSource({
	id: 'twitter-types',
	docsRepo: 'iShibi/docs',
	sourceRepo: 'twitterjs/twitter-types',
	defaultVersion: 'main',
	branchFilter: (branch: string) => !branch.startsWith('dependabot/'),
	tagFilter: (tag: string) => !lt(tag.replace(/(^@\w+\/\w+@v?)?(?<semver>\d+.\d+.\d+)-?.*/, '$<semver>'), '0.25.0'),
});
