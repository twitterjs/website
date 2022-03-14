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
				<li className='pt-2 pl-4 text-sm' key={item.name}>
					<Link to={`${itemType}/${item.name}`}>{item.name}</Link>
				</li>
			);
		});
	};

	return (
		<div className='text-left'>
			<div className='classes'>
				<div className='pt-6 text-xl font-bold uppercase'>Classes</div>
				<ul>{createItemList('classes')}</ul>
			</div>
			<div className='typedefs'>
				<div className='pt-6 text-xl font-bold uppercase'>Typedefs</div>
				<ul>{createItemList('typedefs')}</ul>
			</div>
		</div>
	);
}

export type SidebarItemType = 'classes' | 'typedefs';
