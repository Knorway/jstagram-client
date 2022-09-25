import { PropsWithChildren } from 'react';

const NotFoundPage = () => {
	return (
		<Container>
			<h3 className='font-bold text-2xl'>404</h3>
			<span className='bg-gray-400 w-[1px] h-5'></span>
			<p>페이지를 사용할 수 없습니다.</p>
		</Container>
	);
};

const Container: React.FC<PropsWithChildren> = (props) => {
	return (
		<div className='flex w-full h-full justify-center items-center space-x-3'>
			{props.children}
		</div>
	);
};

export default NotFoundPage;
