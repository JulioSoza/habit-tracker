// src/hooks/reduxHooks.ts
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

// Definimos nosotros el tipo para un selector tipado
type TypedUseSelectorHook<TState> = <TSelected>(
  selector: (state: TState) => TSelected
) => TSelected;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
