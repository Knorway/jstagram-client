import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {
	const navigate = useNavigate();
	const user = useAuth();

	useEffect(() => {
		history.pushState(null, '', '/');
	}, []);

	/**
	 * prevent re-entering login page on `go-back`
	 */
	if (user) {
		navigate('/');
	}

	return (
		<Container>
			<div className='flex flex-col items-center justify-center h-screen'>
				<form className='flex flex-col w-2/5 max-w-full space-y-2 border p-9'>
					<h1 className='mb-5 text-3xl font-bold text-center'>jstagram</h1>
					<input
						type='text'
						placeholder='이메일'
						className='p-3 text-xs bg-gray-100 border rounded-sm focus:outline-none focus:border-gray-300'
					/>
					<input
						type='text'
						placeholder='비밀번호'
						className='p-3 text-xs bg-gray-100 border rounded-sm focus:outline-none focus:border-gray-300'
					/>
					<div className='flex items-center justify-center py-3'>
						<div className='h-[1px] w-full bg-slate-200'></div>
						<span className='px-4 text-sm font-bold text-zinc-400 whitespace-nowrap'>
							또는
						</span>
						<div className='h-[1px] w-full bg-slate-200'></div>
					</div>
					<a
						href={`${
							import.meta.env.VITE_API_URL
						}/oauth2/authorization/google`}
					>
						google로 로그인
					</a>
					<a
						href={`${
							import.meta.env.VITE_API_URL
						}/oauth2/authorization/naver`}
					>
						naver로 로그인
					</a>
				</form>
			</div>
		</Container>
	);
};

const Container: React.FC<PropsWithChildren> = (props) => {
	return (
		<div className='container relative mx-auto lg:max-w-4xl min-w-[768px]'>
			{props.children}
		</div>
	);
};

export default LoginPage;
