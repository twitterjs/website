import { useEffect, useCallback } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Sources, type SourceIdType } from '../data';
import { useGetDocsQuery } from '../store/DocsSlice';
import { useTypedSelector } from '../store/Hooks';
import { ClassMembers } from './ClassMembers';
import { ClassOverview } from './ClassOverview';
import { ClassConstructor } from './ClassConstructor';
import { ClassHeading } from './ClassHeading';

export function ClassItem() {
	const { selectedSourceId, selectedVersion } = useTypedSelector(state => state.docsSettings);
	const { data } = useGetDocsQuery({
		docsRepo: Sources[selectedSourceId as SourceIdType].docsRepo,
		sourceId: selectedSourceId,
		version: selectedVersion,
	});
	const { className } = useParams<{ className: string }>();
	const classItem = data?.classes.find(c => c.name === className);

	const location = useLocation();

	const sleep = (time: number) => {
		return new Promise(resolve => setTimeout(resolve, time));
	};

	const scrollIntoView = useCallback(async () => {
		const el = document.getElementById(location.hash.replace('#', ''));
		if (el) return el.scrollIntoView({ block: 'center', behavior: 'smooth' });
		await sleep(150);
		scrollIntoView();
	}, [location.hash]);

	useEffect(() => {
		scrollIntoView();
	}, [location.hash, scrollIntoView]);

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
