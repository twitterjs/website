import { Footer } from './Footer';

export function FourOhFour() {
	return (
		<div className='relative mt-16 flex text-center text-gray-600 dark:text-gray-400'>
			<div className='flex-1'>
				<div className='min-h-screen px-10 pt-10 pb-16'>
					<h1>404: Page Not Found</h1>
				</div>
				<footer className='border-t border-gray-900 border-opacity-10 dark:border-gray-300 dark:border-opacity-10'>
					<Footer />
				</footer>
			</div>
		</div>
	);
}
