import { useGetVersionsQuery } from '../hooks/Hooks';
import { Sources } from '../data';
import { useTypedDispatch, useTypedSelector } from '../store/Hooks';
import { changeSelectedSource, changeSelectedVersion } from '../store/DocsSettingsSlice';

export function DocsSettings() {
	const { selectedSourceId, selectedVersion } = useTypedSelector(state => state.docsSettings);
	const dispatch = useTypedDispatch();
	const versions = useGetVersionsQuery(selectedSourceId);

	const changeSource = (e: React.ChangeEvent<HTMLSelectElement>) => {
		e.preventDefault();
		dispatch(changeSelectedSource(e.target.value));
	};

	const changeVersion = (e: React.ChangeEvent<HTMLSelectElement>) => {
		e.preventDefault();
		dispatch(changeSelectedVersion(e.target.value));
	};

	return (
		<div className='sticky top-0'>
			<div className='h-5 bg-slate-200 text-left font-bold dark:bg-slate-900'></div>
			<div className='flex flex-col gap-y-3 bg-slate-200 dark:bg-slate-900'>
				<select
					className='block w-full rounded-md p-1 outline-none dark:bg-slate-800'
					name='Source'
					value={selectedSourceId}
					onChange={e => changeSource(e)}
				>
					{Object.keys(Sources).map(sourceId => {
						return (
							<option value={sourceId} key={sourceId}>
								{sourceId}
							</option>
						);
					})}
				</select>
				<select
					className='block w-full rounded-md p-1 outline-none dark:bg-slate-800'
					name='Version'
					value={selectedVersion}
					onChange={e => changeVersion(e)}
				>
					{versions.map(version => {
						return (
							<option value={version} key={version}>
								{version}
							</option>
						);
					})}
				</select>
			</div>
			<div className='h-5 bg-gradient-to-b from-slate-200 dark:from-slate-900'></div>
		</div>
	);
}
