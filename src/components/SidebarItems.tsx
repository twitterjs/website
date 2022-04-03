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
			<div className='getting-started'>
				<div className='pt-6 text-lg font-bold text-black dark:text-gray-300'>Getting Started</div>
				<ul className='space-y-1'>
					{data &&
						Object.keys(data.custom['getting-started'].files).map(name => {
							return (
								<li key={name} className='pt-2 pl-3 text-base'>
									<Link to={`getting-started/${name}`}>{name}</Link>
								</li>
							);
						})}
				</ul>
			</div>
			{isSuccess && data?.classes.length ? (
				<div className='classes'>
					<div className='pt-6 text-lg font-bold text-black dark:text-gray-300'>Classes</div>
					<ul className='space-y-1'>{createItemList('classes')}</ul>
				</div>
			) : (
				<></>
			)}
			{isSuccess && data?.typedefs.length ? (
				<div className='typedefs'>
					<div className='pt-6 text-lg font-bold text-black dark:text-gray-300'>Typedefs</div>
					<ul className='space-y-1'>{createItemList('typedefs')}</ul>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}

export type SidebarItemType = 'classes' | 'typedefs';
