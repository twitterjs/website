// TODO: make theme data a global state
import { useState, type MouseEvent } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

export function ThemeToggle({ height, width }: ThemeTogglePropsType) {
	const [currentTheme, setCurrentTheme] = useState<ThemeType>(
		document.documentElement.classList.contains('dark') ? 'dark' : 'light',
	);

	const toggleTheme = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
		event.preventDefault();
		const newTheme = currentTheme === 'light' ? 'dark' : 'light';
		if (newTheme === 'dark') {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
		setCurrentTheme(newTheme);
	};

	return (
		<button onClick={event => toggleTheme(event)}>
			{currentTheme === 'dark' ? (
				<MoonIcon className={`h-${height ?? 7} w-${width ?? 7} text-white`} />
			) : (
				<SunIcon className={`h-${height ?? 7} w-${width ?? 7} text-black`} />
			)}
		</button>
	);
}

export type ThemeType = 'light' | 'dark';

export interface ThemeTogglePropsType {
	height?: number;
	width?: number;
}
