import { Link } from 'react-router-dom';
import { useTypedSelector } from '../store/Store';
import type { DocumentationClass } from '../typings/Docs';

export function ClassHeading({ classItem }: ClassHeadingPropsType) {
	const { selectedSourceId, selectedVersion } = useTypedSelector(state => state.docsSettings);

	return (
		<div>
			<h1 className='flex justify-start text-3xl font-extrabold'>{classItem.name}</h1>
			{classItem.extends ? (
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
	);
}

export interface ClassHeadingPropsType {
	classItem: DocumentationClass;
}
