import { ThemeToggle } from './ThemeToggle';
import { GithubIcon } from '../assets/GithubIcon';
import { DiscordIcon } from '../assets/DiscordIcon';
import { TwitterIcon } from '../assets/TwitterIcon';
import { Link } from 'react-router-dom';
import { useTypedDispatch, useTypedSelector } from '../store/Hooks';
import { toggleMobileNavbarVisibility } from '../store/DocsSettingsSlice';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

export function Navbar() {
	const { mobileNavbarIsVisible } = useTypedSelector(state => state.docsSettings);
	const dispatch = useTypedDispatch();

	return (
		<div className='fixed inset-x-0 top-0 z-10 bg-slate-200 bg-opacity-75 backdrop-blur-sm backdrop-filter dark:bg-slate-900 dark:bg-opacity-75'>
			<div className='flex h-16 items-center justify-between px-6 lg:px-20'>
				<div className='flex justify-start md:flex-1'>
					<Link to='/' className='text-gray-700 dark:text-gray-300'>
						<span className='text-2xl font-extrabold'>twitter.js</span>
					</Link>
				</div>
				<div className='hidden justify-center font-bold text-gray-500 dark:text-gray-400 md:flex md:flex-1 md:gap-x-6 lg:gap-x-8'>
					<Link to='/' className='hover:text-gray-900 dark:hover:text-gray-100'>
						Home
					</Link>
					<Link to='/docs' className='hover:text-gray-900 dark:hover:text-gray-100'>
						Docs
					</Link>
					<a
						href='https://twitterjs-guide.pages.dev'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-gray-900 dark:hover:text-gray-100'
					>
						Guide
					</a>
				</div>
				<div className='hidden justify-end md:flex md:flex-1 md:gap-x-6 lg:gap-x-8'>
					<a href='https://discord.gg/f5Pefuskx4' target='_blank' rel='noopener noreferrer'>
						<DiscordIcon className='h-7 w-7 dark:fill-white' />
					</a>
					<a href='https://github.com/twitterjs/twitter.js' target='_blank' rel='noopener noreferrer'>
						<GithubIcon className='h-7 w-7 dark:fill-white' />
					</a>
					<a href='https://twitter.com/iShiibi' target='_blank' rel='noopener noreferrer'>
						<TwitterIcon className='h-7 w-7 dark:fill-white' />
					</a>
					<ThemeToggle />
				</div>
				<div className='hover:cursor-pointer md:hidden' onClick={() => dispatch(toggleMobileNavbarVisibility())}>
					{mobileNavbarIsVisible ? (
						<XIcon className='flex h-9 w-9 dark:text-white' />
					) : (
						<MenuIcon className='flex h-9 w-9 dark:text-white' />
					)}
				</div>
			</div>
			{mobileNavbarIsVisible ? (
				<div id='mobile-nav' className='grid grid-cols-1 gap-6 py-4 text-center md:hidden'>
					<div className='grid grid-cols-1 space-y-1 text-lg font-bold text-gray-500 dark:text-gray-400'>
						<Link to='/' className='py-2 hover:text-gray-900 dark:hover:text-gray-100'>
							Home
						</Link>
						<Link to='/docs' className='py-2 hover:text-gray-900 dark:hover:text-gray-100'>
							Docs
						</Link>
						<Link to='/guide' className='py-2 hover:text-gray-900 dark:hover:text-gray-100'>
							Guide
						</Link>
					</div>
					<div className='flex flex-row justify-center space-x-12'>
						<a href='https://discord.gg/f5Pefuskx4' target='_blank' rel='noopener noreferrer'>
							<DiscordIcon className='h-10 w-10 dark:fill-white' />
						</a>
						<a href='https://github.com/twitterjs/twitter.js' target='_blank' rel='noopener noreferrer'>
							<GithubIcon className='h-10 w-10 dark:fill-white' />
						</a>
						<a href='https://twitter.com/iShiibi' target='_blank' rel='noopener noreferrer'>
							<TwitterIcon className='h-10 w-10 dark:fill-white' />
						</a>
						<ThemeToggle height={10} width={10} />
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}
