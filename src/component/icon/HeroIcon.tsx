type Props = {
	variants: keyof typeof icons;
	className?: string;
};

const HeroIcon: React.FC<Props> = ({ variants, className }) => {
	return icons[variants](className);
};

const icons = {
	account: (className?: string) => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className={className ? className : 'w-7 h-7'}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
			/>
		</svg>
	),
	photo: (classNames?: string) => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={0.6}
			stroke='currentColor'
			className={classNames ? classNames : 'w-7 h-7'}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
			/>
		</svg>
	),
	updload: (classNames?: string) => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className={classNames ? classNames : 'w-7 h-7'}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
			/>
		</svg>
	),
	likeFilled: (classNames?: string) => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='crimson'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='none'
			className={classNames ? classNames : 'w-6 h-6'}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
			/>
		</svg>
	),
	likeUnfilled: (classNames?: string) => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='gray'
			className={classNames ? classNames : 'w-6 h-6'}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
			/>
		</svg>
	),
};

export default HeroIcon;
