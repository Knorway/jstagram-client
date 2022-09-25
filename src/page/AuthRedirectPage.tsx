import { useCallback, useEffect } from 'react';

const AuthRedirectPage = () => {
	const setAuthAndReload = useCallback(async () => {
		const token = location.href.split('redirect=')[1];
		history.pushState(null, '', '/');
		if (!token) return;

		localStorage.setItem('access_token', token);
		location.reload();
	}, []);

	useEffect(() => {
		setAuthAndReload();
	}, [setAuthAndReload]);

	return null;
};

export default AuthRedirectPage;
