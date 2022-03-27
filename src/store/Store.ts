import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, type TypedUseSelectorHook, useSelector } from 'react-redux';
import { docsSettingsReducer } from './DocsSettingsSlice';
import { docsApi } from './DocsApi';
import { githubApi } from './GithubApi';

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

export const useTypedDispatch = () => useDispatch<StoreDispatchType>();
export const useTypedSelector: TypedUseSelectorHook<StoreStateType> = useSelector;
