export function HeroBanner() {
	return (
		<div className='flex flex-col items-center gap-y-6 px-8 text-center sm:gap-y-7 md:gap-y-8 lg:gap-y-9'>
			<h1 className='flex flex-col gap-y-2 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl'>
				<span className='text-gray-800 dark:text-gray-100'>Automate the</span>
				<span className='text-[#1da1f2]'>{`"What's Happening"`}</span>
			</h1>
			<p className='max-w-prose text-lg text-gray-600 dark:text-gray-400 sm:text-2xl md:max-w-2xl'>
				with twitter.js &#8212; A Node.js and TypeScript library for interacting with Twitter API
			</p>
			<div className='flex flex-row justify-center gap-x-6'>
				<a
					href='docs/twitter.js/main/getting-started/general'
					className='rounded-md bg-blue-800 px-6 py-3 text-base font-medium text-gray-100'
				>
					Get Started
				</a>
			</div>
		</div>
	);
}
