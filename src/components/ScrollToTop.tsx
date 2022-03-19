import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { hideMobileNavbar } from '../store/DocsSettingsSlice';
import { useTypedDispatch } from '../store/Hooks';

export function ScrollToTop() {
	const location = useLocation();
	const dispatch = useTypedDispatch();

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(hideMobileNavbar());
	}, [location.pathname, dispatch]);

	return <></>;
}
