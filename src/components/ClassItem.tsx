import { Link, useParams } from 'react-router-dom';
import { Sources, type SourceIdType } from '../data';
import { useGetDocsQuery } from '../store/DocsSlice';
import { useTypedSelector } from '../store/Hooks';
import { scopedName } from '../util/scopedName';

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
		<div className='flex flex-col gap-y-4'>
			<div>
				<h1 className='flex justify-start text-3xl font-extrabold'>{classItem?.name}</h1>
				{classItem?.extends ? (
					<p className='flex justify-start'>
						<span>extends</span>
						<span>&nbsp;</span>
						{/* // TODO: remove generic <> part from the extending class if it exists to get the correct URL */}
						<Link
							className='text-blue-800 dark:text-blue-400'
							to={`/docs/${selectedSourceId}/${selectedVersion}/classes/${classItem.extends}`}
						>
							{classItem.extends}
						</Link>
					</p>
				) : (
					<></>
				)}
			</div>
			<p className='flex justify-start text-left'>{classItem?.description}</p>
			<div className='grid gap-y-6 sm:grid-cols-2 md:grid-cols-3'>
				{classItem?.props?.length ? (
					<div>
						<h1 className='mb-2 text-left text-xl font-bold'>Properties</h1>
						<ul className='flex flex-col space-y-1 text-left'>
							{classItem?.props.map(p => {
								return (
									<li className='text-blue-800 dark:text-blue-400' key={scopedName(p)}>
										{p.name}
									</li>
								);
							})}
						</ul>
					</div>
				) : (
					<></>
				)}
				{classItem?.methods?.length ? (
					<div>
						<h1 className='mb-2 text-left text-xl font-bold'>Methods</h1>
						<ul className='space-y-1 text-left'>
							{classItem?.methods.map(m => {
								return (
									<li className='text-blue-800 dark:text-blue-400' key={scopedName(m)}>
										{m.name}
									</li>
								);
							})}
						</ul>
					</div>
				) : (
					<></>
				)}
				{classItem?.events?.length ? (
					<div>
						<h1 className='mb-2 text-left text-xl font-bold'>Events</h1>
						<ul className='space-y-1 text-left'>
							{classItem.events.map(e => {
								return <li key={e.name}>{e.name}</li>;
							})}
						</ul>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
