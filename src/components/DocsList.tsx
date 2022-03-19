import { Link } from 'react-router-dom';
import { Sources } from '../data';
import { Footer } from './Footer';

export function DocsList() {
	return (
		<div className='relative mt-16 flex text-center text-gray-600 dark:text-gray-400'>
			<div className='flex-1'>
				<div className='flex min-h-screen items-center justify-center px-10 py-4'>
					<div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
						{Object.entries(Sources).map(([sourceId, source]) => {
							return (
								<Link
									key={sourceId}
									className='rounded-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 pl-4 pt-4 pb-20 pr-20 transition duration-200 ease-in-out hover:scale-105 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900'
									to={`${sourceId}/${source.defaultVersion}`}
								>
									<p className='text-left text-lg font-bold text-white'>{sourceId}</p>
								</Link>
							);
						})}
					</div>
				</div>
				<footer className='border-t border-gray-900 border-opacity-10 dark:border-gray-300 dark:border-opacity-10'>
					<Footer />
				</footer>
			</div>
		</div>
	);
}
