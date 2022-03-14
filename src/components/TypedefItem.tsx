import { useParams } from 'react-router-dom';
import { Sources, type SourceIdType } from '../data';
import { useGetDocsQuery } from '../store/DocsSlice';
import { useTypedSelector } from '../store/Hooks';

export function TypedefItem() {
	const { selectedSourceId, selectedVersion } = useTypedSelector(state => state.docsSettings);
	const { data } = useGetDocsQuery({
		docsRepo: Sources[selectedSourceId as SourceIdType].docsRepo,
		sourceId: selectedSourceId,
		version: selectedVersion,
	});
	const { typedefName } = useParams<{ typedefName: string }>();
	const typedefItem = data?.typedefs.find(t => t.name === typedefName);

	return (
		<div>
			<h1 className='bold text-xl'>{typedefItem?.name}</h1>
			<p>{typedefItem?.description}</p>
		</div>
	);
}
