import { Link } from 'react-router-dom';
import { useTypedSelector } from '../store/Hooks';
import { useGetDocsQuery } from '../store/DocsSlice';
import { type SourceIdType, Sources } from '../data';

export function SidebarItems() {
	const { selectedSourceId, selectedVersion } = useTypedSelector(state => state.docsSettings);
	const { data, error, isLoading } = useGetDocsQuery({
		docsRepo: Sources[selectedSourceId as SourceIdType].docsRepo,
		sourceId: selectedSourceId,
		version: selectedVersion,
	});

	const createItemList = (itemType: SidebarItemType) => {
		if (error) return <>Error!</>;
		if (isLoading) return <>Loading...</>;
		return data?.[itemType].map(item => {
			return (
				<li className='pt-2 pl-3 text-sm' key={item.name}>
					<Link to={`${itemType}/${item.name}`}>{item.name}</Link>
				</li>
			);
		});
	};

	return (
		<div className='text-left'>
			<div className='getting-started'>
				<div className='pt-6 text-lg font-bold'>Getting Started</div>
				<ul className='space-y-1'>
					<li className='pt-2 pl-3 text-sm'>
						<Link to='getting-started/general'>General</Link>
					</li>
				</ul>
			</div>
			<div className='classes'>
				<div className='pt-6 text-lg font-bold'>Classes</div>
				<ul className='space-y-1'>{createItemList('classes')}</ul>
			</div>
			<div className='typedefs'>
				<div className='pt-6 text-lg font-bold'>Typedefs</div>
				<ul className='space-y-1'>{createItemList('typedefs')}</ul>
			</div>
		</div>
	);
}

export type SidebarItemType = 'classes' | 'typedefs';
