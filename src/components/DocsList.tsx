import { Link } from 'react-router-dom';
import { Sources } from '../data';
import { Footer } from './Footer';

export function DocsList() {
	return (
		<div className='relative mt-16 flex text-center text-gray-600 dark:text-gray-400'>
			<div className='flex-1'>
				<div className='min-h-screen px-10 pt-10 pb-16'>
					<ul>
						{Object.entries(Sources).map(([sourceId, source]) => {
							return (
								<li key={sourceId}>
									<Link to={`${sourceId}/${source.defaultVersion}`}>{sourceId}</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<footer className='border-t border-gray-900 border-opacity-10 dark:border-gray-300 dark:border-opacity-10'>
					<Footer />
				</footer>
			</div>
		</div>
	);
}
