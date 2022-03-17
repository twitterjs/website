import { useEffect, useCallback } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Sources, type SourceIdType } from '../data';
import { useGetDocsQuery } from '../store/DocsSlice';
import { useTypedSelector } from '../store/Hooks';
import { scopedName } from '../util/scopedName';
import { ConstructorComponent } from './ConstructorComponent';
import { ParameterTable } from './ParameterTable';

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
		<div className='flex flex-col gap-y-6'>
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
			<ConstructorComponent constructorData={classItem.construct} />
			<div className='grid grid-cols-1 gap-3'>
				<h1 className='text-left text-xl font-extrabold'>Overview</h1>
				<div className='grid gap-y-6 sm:grid-cols-2 md:grid-cols-3'>
					{classItem?.props?.length ? (
						<div>
							<h1 className='mb-1 text-left font-bold'>Properties</h1>
							<ul className='space-y-2 text-left'>
								{classItem?.props.map(p => {
									return (
										<li className='text-blue-800 dark:text-blue-400' key={scopedName(p)}>
											<Link to={`#${scopedName(p)}`}>{p.name}</Link>
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
							<h1 className='mb-1 text-left font-bold'>Methods</h1>
							<ul className='space-y-2 text-left'>
								{classItem?.methods.map(m => {
									return (
										<li className='text-blue-800 dark:text-blue-400' key={scopedName(m)}>
											<Link to={`#${scopedName(m)}`}>{m.name}</Link>
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
							<h1 className='mb-1 text-left font-bold'>Events</h1>
							<ul className='space-y-2 text-left'>
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
			<div className='grid grid-cols-1 gap-10'>
				{classItem?.props?.length ? (
					<div>
						<h1 className='mb-1 text-left text-xl font-extrabold'>Properties</h1>
						<ul className='divide-y dark:divide-slate-800/90'>
							{classItem.props.map(p => {
								return (
									<li className='space-y-4 py-8 text-left' key={scopedName(p)}>
										<h1 className='text-blue-800 dark:text-blue-400' id={p.name}>
											<Link to={`#${scopedName(p)}`}>.{p.name}</Link>
										</h1>
										<div className='space-y-4'>
											<p>{p.description}</p>
											<p>
												<span className='font-bold'>Type</span>: {p.type}
											</p>
										</div>
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
						<h1 className='mb-1 text-left text-xl font-extrabold'>Methods</h1>
						<ul className='divide-y dark:divide-slate-800/90'>
							{classItem.methods.map(m => {
								return (
									<li className='space-y-4 py-8 text-left' key={scopedName(m)}>
										<h1 className='text-blue-800 dark:text-blue-400' id={scopedName(m)}>
											<Link to={`#${scopedName(m)}`}>
												.{m.name}({m.params?.map(p => p.name).join(', ')})
											</Link>
										</h1>
										<div className='space-y-4'>
											<p>{m.description}</p>
											<ParameterTable parametersData={m.params} />
											<p>
												<span className='font-bold'>Returns:</span> {m.returns}
											</p>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	) : (
		<>Unable to find details about the requested class</>
	);
}
