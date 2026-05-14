import { useOutletContext } from 'react-router-dom';
import type { AppLayoutContextValue } from '../types/layout';

export const useAppLayoutContext = () => useOutletContext<AppLayoutContextValue>();
