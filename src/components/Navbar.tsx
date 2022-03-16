import { ThemeToggle } from './ThemeToggle';
import { GithubIcon } from '../assets/GithubIcon';
import { DiscordIcon } from '../assets/DiscordIcon';
import { TwitterIcon } from '../assets/TwitterIcon';
import { Link } from 'react-router-dom';

export function Navbar() {
	return (
		<div className='fixed inset-x-0 top-0 z-10 bg-slate-200 bg-opacity-75 backdrop-blur-sm backdrop-filter dark:bg-slate-900 dark:bg-opacity-75'>
			<div className='flex h-16 items-center px-6 lg:px-20'>
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
					<Link to='/guide' className='hover:text-gray-900 dark:hover:text-gray-100'>
						Guide
					</Link>
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
			</div>
		</div>
	);
}