import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { ThemeType } from '../components/ThemeToggle';
import { type SourceIdType, Sources } from '../data';

interface DocsSettingsStateType {
	selectedSourceId: string;
	selectedVersion: string;
	mobileNavbarIsVisible: boolean;
	mobileSidebarIsVisible: boolean;
	currentTheme: ThemeType;
}

const initialState: DocsSettingsStateType = {
	selectedSourceId: 'twitter.js',
	selectedVersion: 'main',
	mobileNavbarIsVisible: false,
	mobileSidebarIsVisible: false,
	currentTheme: document.documentElement.classList.contains('dark') ? 'dark' : 'light',
};

export const docsSettingsSlice = createSlice({
	name: 'docsSettings',
	initialState,
	reducers: {
		changeSelectedSource: (state, action: PayloadAction<string>) => {
			state.selectedSourceId = action.payload;
			state.selectedVersion = Sources[action.payload as SourceIdType].defaultVersion;
		},
		changeSelectedVersion: (state, action: PayloadAction<string>) => {
			state.selectedVersion = action.payload;
		},
		toggleMobileNavbarVisibility: state => {
			state.mobileNavbarIsVisible = !state.mobileNavbarIsVisible;
		},
		hideMobileNavbar: state => {
			state.mobileNavbarIsVisible = false;
		},
		toggleMobileSidebarVisibility: state => {
			state.mobileSidebarIsVisible = !state.mobileSidebarIsVisible;
		},
		hideMobileSidebar: state => {
			state.mobileSidebarIsVisible = false;
		},
		setCurrentTheme: (state, action: PayloadAction<ThemeType>) => {
			state.currentTheme = action.payload;
		},
	},
});

export const {
	changeSelectedSource,
	changeSelectedVersion,
	toggleMobileNavbarVisibility,
	hideMobileNavbar,
	toggleMobileSidebarVisibility,
	hideMobileSidebar,
	setCurrentTheme,
} = docsSettingsSlice.actions;
export const docsSettingsReducer = docsSettingsSlice.reducer;
