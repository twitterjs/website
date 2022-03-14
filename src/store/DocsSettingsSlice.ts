import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type SourceIdType, Sources } from '../data';

interface DocsSettingsStateType {
	selectedSourceId: string;
	selectedVersion: string;
}

const initialState: DocsSettingsStateType = {
	selectedSourceId: 'twitter.js',
	selectedVersion: 'main',
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
	},
});

export const { changeSelectedSource, changeSelectedVersion } = docsSettingsSlice.actions;
export const docsSettingsReducer = docsSettingsSlice.reducer;
