import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { StoreDispatchType, StoreStateType } from './Store';

export const useTypedDispatch = () => useDispatch<StoreDispatchType>();
export const useTypedSelector: TypedUseSelectorHook<StoreStateType> = useSelector;
