import { Link } from 'react-router-dom';
import type { DocumentationClass } from '../typings/Docs';
import { scopedName } from '../util';

export function ClassOverview({ classItem }: ClassOverviewPropsType) {
	return (
		<div className='grid grid-cols-1 gap-3'>
			<h1 className='text-left text-xl font-extrabold text-black dark:text-gray-300'>Overview</h1>
			<div className='grid gap-y-6 sm:grid-cols-2 md:grid-cols-3'>
				{classItem.props?.length ? (
					<div>
						<h1 className='mb-2 text-left font-bold'>Properties</h1>
						<ul className='space-y-3 text-left'>
							{classItem.props.map(p => {
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
				{classItem.methods?.length ? (
					<div>
						<h1 className='mb-2 text-left font-bold'>Methods</h1>
						<ul className='space-y-3 text-left'>
							{classItem.methods.map(m => {
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
				{classItem.events?.length ? (
					<div>
						<h1 className='mb-2 text-left font-bold'>Events</h1>
						<ul className='space-y-3 text-left'>
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

export interface ClassOverviewPropsType {
	classItem: DocumentationClass;
}
