import { Footer } from './Footer';
import { DocsSidebar } from './DocsSidebar';
import { DocsMain } from './DocsMain';
import { useTypedDispatch, useTypedSelector } from '../store/Hooks';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { changeSelectedSource, changeSelectedVersion, toggleMobileSidebarVisibility } from '../store/DocsSettingsSlice';
import { Sources } from '../data';
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/outline';

export function Docs() {
	const location = useLocation();
	const { source, version } = useParams<{ source: string; version: string }>();
	const { selectedSourceId, selectedVersion, mobileSidebarIsVisible } = useTypedSelector(state => state.docsSettings);
	const navigate = useNavigate();
	const dispatch = useTypedDispatch();

	useEffect(() => {
		navigate(location.pathname);
		if (source && Object.keys(Sources).includes(source)) dispatch(changeSelectedSource(source));
		if (version) dispatch(changeSelectedVersion(version));
	}, []);

	useEffect(() => {
		const prevPath = location.pathname.split('/').slice(4);
		if (selectedSourceId && selectedVersion)
			prevPath.length
				? navigate(`/docs/${selectedSourceId}/${selectedVersion}/${prevPath.join('/')}${location.hash}`)
				: navigate(`/docs/${selectedSourceId}/${selectedVersion}`);
	}, [selectedSourceId, selectedVersion]);
	return (
		<>
			<div className='relative mt-16 flex text-center text-gray-600 dark:text-gray-400'>
				<div className='custom-scrollbar fixed inset-0 top-16 right-auto z-20 hidden w-80 overflow-y-auto overflow-x-hidden px-4 pb-10 lg:block'>
					<DocsSidebar />
				</div>
				<div id='mobile-sidebar' className='grid grid-cols-2 lg:hidden'>
					<div
						onClick={() => dispatch(toggleMobileSidebarVisibility())}
						className='fixed right-0 mt-8 cursor-pointer rounded-l-3xl bg-blue-900 py-3 pr-2 pl-3'
					>
						{mobileSidebarIsVisible ? (
							<ArrowCircleLeftIcon className='h-10 w-10 text-white' />
						) : (
							<ArrowCircleRightIcon className='h-10 w-10 text-white' />
						)}
					</div>
					{mobileSidebarIsVisible ? (
						<div className='custom-scrollbar fixed inset-0 top-16 right-auto w-3/4 overflow-y-auto overflow-x-hidden bg-slate-200 px-4 pb-10 dark:bg-slate-900'>
							<DocsSidebar />
						</div>
					) : (
						<></>
					)}
				</div>
				<div className='flex-1 lg:ml-80'>
					<div className='min-h-screen px-10 pt-10 pb-16'>
						<DocsMain />
					</div>
					<footer className='border-t border-gray-900 border-opacity-10 dark:border-gray-300 dark:border-opacity-10'>
						<Footer />
					</footer>
				</div>
			</div>
		</>
	);
}
