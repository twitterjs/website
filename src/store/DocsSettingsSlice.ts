import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type SourceIdType, Sources } from '../data';

interface DocsSettingsStateType {
	selectedSourceId: string;
	selectedVersion: string;
	mobileNavIsVisible: boolean;
}

const initialState: DocsSettingsStateType = {
	selectedSourceId: 'twitter.js',
	selectedVersion: 'main',
	mobileNavIsVisible: false,
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
		toggleMobileNavVisibility: state => {
			state.mobileNavIsVisible = !state.mobileNavIsVisible;
		},
		hideMobileNav: state => {
			state.mobileNavIsVisible = false;
		},
	},
});

export const { changeSelectedSource, changeSelectedVersion, toggleMobileNavVisibility, hideMobileNav } =
	docsSettingsSlice.actions;
export const docsSettingsReducer = docsSettingsSlice.reducer;
