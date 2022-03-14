import { configureStore } from '@reduxjs/toolkit';
import { docsSettingsReducer } from './DocsSettingsSlice';
import { docsApi } from './DocsSlice';
import { githubApi } from './VersionsSlice';

export const store = configureStore({
	reducer: {
		docsSettings: docsSettingsReducer,
		[docsApi.reducerPath]: docsApi.reducer,
		[githubApi.reducerPath]: githubApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(docsApi.middleware).concat(githubApi.middleware),
});

export type StoreStateType = ReturnType<typeof store.getState>;
export type StoreDispatchType = typeof store.dispatch;
