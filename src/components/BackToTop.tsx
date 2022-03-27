import { ArrowUpIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';

export function BackToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const scrollToTop = () => {
			if (window.scrollY > 1) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};
		window.addEventListener('scroll', scrollToTop);
		return () => window.removeEventListener('scroll', scrollToTop);
	}, []);

	return isVisible ? (
		<div
			className='fixed bottom-4 right-4 cursor-pointer rounded-xl bg-blue-900 p-3'
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		>
			<ArrowUpIcon className='h-7 w-7 text-white' />
		</div>
	) : (
		<></>
	);
}
