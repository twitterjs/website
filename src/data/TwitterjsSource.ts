import { lt } from 'semver';
import { DocsSource } from './DocsSource';

export const twitterjsSource = new DocsSource({
	id: 'twitter.js',
	docsRepo: 'twitterjs/docs',
	sourceRepo: 'twitterjs/twitter.js',
	defaultVersion: 'main',
	branchFilter: (branch: string) => !branch.startsWith('dependabot/'),
	tagFilter: (tag: string) => !lt(tag.replace(/(^@\w+\/\w+@v?)?(?<semver>\d+.\d+.\d+)-?.*/, '$<semver>'), '0.14.0'),
});
