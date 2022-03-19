import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type SourceIdType, Sources } from '../data';

interface DocsSettingsStateType {
	selectedSourceId: string;
	selectedVersion: string;
	mobileNavbarIsVisible: boolean;
	mobileSidebarIsVisible: boolean;
}

const initialState: DocsSettingsStateType = {
	selectedSourceId: 'twitter.js',
	selectedVersion: 'main',
	mobileNavbarIsVisible: false,
	mobileSidebarIsVisible: false,
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
	},
});

export const {
	changeSelectedSource,
	changeSelectedVersion,
	toggleMobileNavbarVisibility,
	hideMobileNavbar,
	toggleMobileSidebarVisibility,
} = docsSettingsSlice.actions;
export const docsSettingsReducer = docsSettingsSlice.reducer;
