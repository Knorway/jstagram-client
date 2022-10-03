import React, { Fragment, PropsWithChildren } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { validateAuth } from '../../api/fetcher';
import { queryKey } from '../../api/queryClient';
import Header from './Header';

const excluded = ['/login', '/register', '/auth-redirect'];

const AppLayout = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { data: user } = useQuery(queryKey.validation, validateAuth, {
		onError: () => {
			navigate('/login');
		},
	});

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
		<div className='bg-gray-50 min-h-screen'>
			<div className='container relative mx-auto xl:max-w-3xl h-full'>
				{props.children}
			</div>
		</div>
	);
};

export default AppLayout;
