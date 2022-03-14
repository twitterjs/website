import { useParams } from 'react-router-dom';
import { Sources, type SourceIdType } from '../data';
import { useGetDocsQuery } from '../store/DocsSlice';
import { useTypedSelector } from '../store/Hooks';

export function ClassItem() {
	const { selectedSourceId, selectedVersion } = useTypedSelector(state => state.docsSettings);
	const { data } = useGetDocsQuery({
		docsRepo: Sources[selectedSourceId as SourceIdType].docsRepo,
		sourceId: selectedSourceId,
		version: selectedVersion,
	});
	const { className } = useParams<{ className: string }>();
	const classItem = data?.classes.find(c => c.name === className);

	return (
		<div>
			<h1 className='bold text-xl'>{classItem?.name}</h1>
			<p>{classItem?.description}</p>
		</div>
	);
}
