import React, {
  ChangeEventHandler,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { uploadPost } from '../api/fetcher';
import { UploadPostInput } from '../api/types';
import HeroIcon from '../component/icon/HeroIcon';

const PostCreatePage = () => {
	const [previewSrc, setPreviewSrc] =
		useState<typeof FileReader['prototype']['result']>();
	const { handleSubmit, register } = useForm<UploadPostInput>();
	const navigate = useNavigate();

	const { mutate, data } = useMutation(uploadPost, {
		onSuccess: () => {
			navigate('/');
		},
	});

	const previewImage: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
		const reader = new FileReader();
		reader.addEventListener('load', () => {
			setPreviewSrc(reader.result);
		});

		if (e.target.files?.[0]) {
			reader.readAsDataURL(e.target.files[0]);
		} else {
			setPreviewSrc(null);
		}
	}, []);

	const onSubmit: SubmitHandler<UploadPostInput> = useCallback(
		(data) => {
			mutate(data);
		},
		[mutate]
	);

	useEffect(() => {
		if (data) {
			console.log(data);
		}
	}, [data]);

	return (
		<Container>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col w-1/2 p-8 -mt-12 space-y-4 border'
			>
				<label
					htmlFor='file-input'
					className='w-full max-h-[312px] border-[3px] border-gray-300 border-dotted cursor-pointer hover:border-gray-700 transition-all duration-500 overflow-hidden'
				>
					{previewSrc ? (
						<img src={previewSrc as string} className='object-center' />
					) : (
						<HeroIcon
							variants='photo'
							className='w-full h-full text-gray-600 transition-all duration-300 hover:scale-105'
						/>
					)}
				</label>
				<input
					type='file'
					accept='image/*'
					id='file-input'
					{...register('image', {
						onChange: previewImage,
					})}
					className='hidden'
				/>
				<small className='text-xs text-gray-600'>
					파일의 크기는 4MB를 넘을 수 없습니다
				</small>
				<input
					type='text'
					placeholder='본문'
					{...register('content')}
					className='px-2 py-1 font-thin bg-gray-100 border rounded-sm focus:outline-none focus:border-gray-400 placeholder:font-thin placeholder:pl-1'
				/>
				<small className='text-xs text-gray-600'>100자 이내로 작성해주세요</small>
				<button className='px-3 py-1 mx-auto text-sm font-bold text-white transition-all translate-x-0 bg-gray-900 rounded-sm max-w-min whitespace-nowrap hover:bg-slate-500'>
					등록
				</button>
			</form>
		</Container>
	);
};

const Container: React.FC<PropsWithChildren> = (props) => {
	return (
		<div className='flex items-center justify-center h-full'>{props.children}</div>
	);
};

export default PostCreatePage;
