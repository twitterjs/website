import { Link } from 'react-router-dom';
import { useTypedSelector } from '../store/Hooks';
import { DocumentationTypeDefinition } from '../typings/Docs';

export function TypedefHeading({ typedefItem }: TypedefHeadingPropsType) {
	const { selectedSourceId, selectedVersion } = useTypedSelector(state => state.docsSettings);

	return (
		<div>
			<h1 className='flex justify-start text-3xl font-extrabold'>{typedefItem.name}</h1>
			{typedefItem.type ? (
				<p className='flex justify-start'>
					<span>extends</span>
					<span>&nbsp;</span>
					{/* // TODO: remove generic <> part from the extending class if it exists to get the correct URL */}
					<Link
						className='text-blue-800 dark:text-blue-400'
						to={`/docs/${selectedSourceId}/${selectedVersion}/typedefs/${typedefItem.type}`}
					>
						{typedefItem.type}
					</Link>
				</p>
			) : (
				<></>
			)}
		</div>
	);
}

export interface TypedefHeadingPropsType {
	typedefItem: DocumentationTypeDefinition;
}
