import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { hideMobileNavbar, hideMobileSidebar } from '../store/DocsSettingsSlice';
import { useTypedDispatch } from '../store/Store';

export function Reset() {
	const location = useLocation();
	const dispatch = useTypedDispatch();

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(hideMobileNavbar());
		dispatch(hideMobileSidebar());
	}, [location.pathname, dispatch]);

	return <></>;
}
