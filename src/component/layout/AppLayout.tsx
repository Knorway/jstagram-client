import React, { Fragment, PropsWithChildren } from 'react';
import { useQuery } from 'react-query';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { validateAuth } from '../../api/fetcher';
import { queryKey } from '../../api/queryClient';
import Header from './Header';

const excluded = ['/login', '/register', '/auth-redirect'];

const AppLayout = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { data: user } = useQuery(queryKey.validation, validateAuth);

	if (excluded.includes(pathname)) {
		return <Outlet />;
	}

	if (!user) {
		navigate('/login');
		return null;
	}

	return (
		<Fragment>
			<Header />
			<Container>
				<Outlet />
			</Container>
		</Fragment>
	);
};

const Container: React.FC<PropsWithChildren> = (props) => {
	return (
		<div className='bg-gray-50 min-h-screen h-screen'>
			<div className='container relative mx-auto xl:max-w-3xl h-full'>
				{props.children}
			</div>
		</div>
	);
};

export default AppLayout;
