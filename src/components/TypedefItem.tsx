import { useParams } from 'react-router-dom';
import { Sources, type SourceIdType } from '../data';
import { useGetDocsQuery } from '../store/DocsSlice';
import { useTypedSelector } from '../store/Hooks';
import { TypedefHeading } from './TypedefHeading';
import { TypedefProperties } from './TypedefProperties';

export function TypedefItem() {
	const { selectedSourceId, selectedVersion } = useTypedSelector(state => state.docsSettings);
	const { data } = useGetDocsQuery({
		docsRepo: Sources[selectedSourceId as SourceIdType].docsRepo,
		sourceId: selectedSourceId,
		version: selectedVersion,
	});
	const { typedefName } = useParams<{ typedefName: string }>();
	const typedefItem = data?.typedefs.find(t => t.name === typedefName);

	return typedefItem ? (
		<div className='grid grid-cols-1 gap-6'>
			<TypedefHeading typedefItem={typedefItem} />
			<p className='flex justify-start text-left'>{typedefItem.description}</p>
			<TypedefProperties typedefItem={typedefItem} />
		</div>
	) : (
		<>Unable to fetch details about {typedefName} typedef</>
	);
}
