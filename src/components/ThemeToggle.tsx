import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import { useTypedDispatch, useTypedSelector } from '../store/Hooks';
import { setCurrentTheme } from '../store/DocsSettingsSlice';

export function ThemeToggle({ height, width }: ThemeTogglePropsType) {
	const { currentTheme } = useTypedSelector(state => state.docsSettings);
	const dispatch = useTypedDispatch();

	const toggleTheme = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		const newTheme: ThemeType = currentTheme === 'light' ? 'dark' : 'light';
		if (newTheme === 'dark') {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
		dispatch(setCurrentTheme(newTheme));
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
