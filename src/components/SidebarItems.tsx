import { Link } from 'react-router-dom';
import { useGetDocsQuery } from '../store/DocsApi';
import { type SourceIdType, Sources } from '../data';
import { useTypedSelector } from '../store/Store';

export function SidebarItems() {
	const { selectedSourceId, selectedVersion } = useTypedSelector(state => state.docsSettings);
	const { data, error, isLoading, isSuccess } = useGetDocsQuery({
		docsRepo: Sources[selectedSourceId as SourceIdType].docsRepo,
		sourceId: selectedSourceId,
		version: selectedVersion,
	});

	const createItemList = (itemType: SidebarItemType) => {
		if (error) return <>Error!</>;
		if (isLoading) return <>Loading...</>;
		return data?.[itemType].map(item => {
			return (
				<li className='pt-2 pl-3 text-base' key={item.name}>
					<Link to={`${itemType}/${item.name}`}>{item.name}</Link>
				</li>
			);
		});
	};

	return (
		<div className='text-left'>
			{isSuccess && data?.classes.length ? (
				<div className='classes'>
					<div className='pt-6 text-lg font-bold'>Classes</div>
					<ul className='space-y-1'>{createItemList('classes')}</ul>
				</div>
			) : (
				<></>
			)}
			{isSuccess && data?.typedefs.length ? (
				<div className='typedefs'>
					<div className='pt-6 text-lg font-bold'>Typedefs</div>
					<ul className='space-y-1'>{createItemList('typedefs')}</ul>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}

export type SidebarItemType = 'classes' | 'typedefs';
