import { useEffect, useCallback } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Sources, type SourceIdType } from '../data';
import { useGetDocsQuery } from '../store/DocsApi';
import { ClassMembers } from './ClassMembers';
import { ClassOverview } from './ClassOverview';
import { ClassConstructor } from './ClassConstructor';
import { ClassHeading } from './ClassHeading';
import { useTypedSelector } from '../store/Store';
import { sleep } from '../util';

export function ClassItem() {
	const { selectedSourceId, selectedVersion } = useTypedSelector(state => state.docsSettings);
	const { data, isSuccess } = useGetDocsQuery({
		docsRepo: Sources[selectedSourceId as SourceIdType].docsRepo,
		sourceId: selectedSourceId,
		version: selectedVersion,
	});

	const location = useLocation();

	const scrollIntoView = useCallback(async () => {
		const el = document.getElementById(location.hash.replace('#', ''));
		if (el) return el.scrollIntoView({ block: 'center', behavior: 'smooth' });
		await sleep(100);
		scrollIntoView();
	}, [location.hash]);

	useEffect(() => {
		scrollIntoView();
	}, [location.hash, scrollIntoView]);

	const { className } = useParams<{ className: string }>();
	const classItem = isSuccess ? data?.classes.find(c => c.name === className) : undefined;

	return classItem ? (
		<div className='grid grid-cols-1 gap-6'>
			<ClassHeading classItem={classItem} />
			<p className='flex justify-start text-left'>{classItem.description}</p>
			<ClassConstructor className={classItem.name} constructorData={classItem.construct} />
			<ClassOverview classItem={classItem} />
			<ClassMembers classItem={classItem} />
		</div>
	) : (
		<>Unable to find details about {className} class</>
	);
}
