import { Footer } from './Footer';
import { HeroBanner } from './HeroBanner';

export function Home() {
	return (
		<>
			<div className='my-40 min-h-screen'>
				<HeroBanner />
			</div>
			<footer className='border-t border-gray-900 border-opacity-10 dark:border-gray-300 dark:border-opacity-10'>
				<Footer />
			</footer>
		</>
	);
}
