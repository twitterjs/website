import { twitterjsSource } from './TwitterjsSource';
import { twitterTypesSource } from './TwitterTypesSource';

export const Sources = {
	'twitter.js': twitterjsSource,
	'twitter-types': twitterTypesSource,
};

export type SourceIdType = keyof typeof Sources;
