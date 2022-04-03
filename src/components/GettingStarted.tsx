import { useParams } from 'react-router-dom';
import { Sources, SourceIdType } from '../data';
import { useGetDocsQuery } from '../store/DocsApi';
import { useTypedSelector } from '../store/Store';
import { Topic } from './Topic';

export function GettingStarted() {
	const { selectedSourceId, selectedVersion } = useTypedSelector(state => state.docsSettings);
	const { data } = useGetDocsQuery({
		docsRepo: Sources[selectedSourceId as SourceIdType].docsRepo,
		sourceId: selectedSourceId,
		version: selectedVersion,
	});
	const { topic } = useParams<{ topic: string }>();
	const content = topic && data?.custom['getting-started'].files[topic].content;

	return <Topic content={content} />;
}
