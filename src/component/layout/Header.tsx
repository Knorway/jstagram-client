import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import HeroIcon from '../icon/HeroIcon';

const Header = () => {
	return (
		<Container>
			<h1>
				<Link to='/' className='text-2xl font-bold'>
					jstagram
				</Link>
			</h1>
			<input
				type='text'
				placeholder='검색'
				className='px-2 py-1 font-thin bg-gray-100 border border-gray-100 rounded-md placeholder:font-thin placeholder:pl-1 focus:outline-none'
			/>
			<ul className='flex space-x-4'>
				<Link to={'/post/create'}>
					<HeroIcon variants='updload' />
				</Link>
				<Link to={'/profile'}>
					<HeroIcon variants='account' />
				</Link>
			</ul>
		</Container>
	);
};

const Container: React.FC<PropsWithChildren> = (props) => {
	return (
		<div className='flex items-center justify-center py-3 border-b sticky inset-0 bg-white z-10'>
			<nav className='container flex items-center justify-between py-2 mx-auto xl:max-w-4xl md:py-0'>
				{props.children}
			</nav>
		</div>
	);
};

export default Header;
