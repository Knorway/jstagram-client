import { AxiosResponse } from 'axios';
import produce from 'immer';
import { MouseEvent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { createComment, createLike, getMainPagePosts } from '../api/fetcher';
import { queryKey } from '../api/queryClient';
import { Likes, QueryPostsResponse } from '../api/types';
import HeroIcon from '../component/icon/HeroIcon';
import { useAuth } from '../hooks/useAuth';

export type createCommentInput = {
	content: string;
};

const Home = () => {
	const { data } = useQuery(queryKey.posts, getMainPagePosts);
	const { mutate } = useMutation(createLike);
	const user = useAuth();
	const queryClient = useQueryClient();

	const onLike = (input: { postId: number; userId: number }) => () => {
		const { postId, userId } = input;
		mutate(
			{ postId },
			{
				onSuccess: () => {
					queryClient.setQueryData<AxiosResponse<QueryPostsResponse[]>>(
						queryKey.posts,
						(data) => {
							return produce(data, (draft) => {
								const target = draft?.data.find((e) => e.id === postId);
								const dummyLikes: Likes = {
									id: 0,
									liked: false,
									likes: 0,
									post: { id: postId },
									user: { id: userId },
									...(target?.likes && target.likes),
								};

								target!.likes = {
									...dummyLikes,
									liked: !dummyLikes.liked,
									likes: dummyLikes.liked
										? dummyLikes.likes - 1
										: dummyLikes.likes + 1,
								};
							});
						}
					);
				},
			}
		);
	};

	const onClickImage = (path: string) => (e: MouseEvent<HTMLImageElement>) => {
		const { naturalWidth, naturalHeight } = e.currentTarget;
		const popup = window.open(
			'',
			'Popup',
			`width=${naturalWidth},height=${naturalHeight}`
		)!;
		const img = popup.document.createElement('img');

		img.src = path;
		img.style.cssText = `cursor: pointer;`;
		img.addEventListener('click', () => {
			popup.close();
		});

		popup.document.body.style.cssText = `margin: 0; padding: 0;`;
		popup.document.title = path.split('/image/')[1];
		popup.document.body.appendChild(img);
	};

	console.log(data);

	return (
		<div className='flex'>
			<div className='w-3/5'>
				{data?.data.map((post) => {
					const path = `${import.meta.env.VITE_API_URL}/image/${
						post.imgUrl.split('/upload/')[1]
					}`;

					return (
						<div key={path} className='mb-4'>
							<div className='flex items-center'>
								<HeroIcon variants='account' className='w-6 h-6' />
								<p className='text-sm'>{post.user.username}</p>
							</div>
							<div>
								<img
									src={path}
									onClick={onClickImage(path)}
									className='cursor-pointer'
								/>
								{/* <img
									src={`${
										import.meta.env.VITE_API_URL
									}/image/cb35cfbf-fec3-4d09-bbb5-e1859052f6de_4.jpeg`}
								/> */}
							</div>
							<small className='italic'>작성일: {post.createdAt}</small>
							<p>좋아요: {post.likes?.likes ? post.likes?.likes : 0}</p>
							<div onClick={onLike({ postId: post.id, userId: user!.id })}>
								{post.likes?.liked ? (
									<HeroIcon
										variants='likeFilled'
										className='w-6 h-6 rounded-full'
									/>
								) : (
									<HeroIcon
										variants='likeUnfilled'
										className='w-6 h-6 rounded-full'
									/>
								)}
							</div>
							<p>
								<span>본문: {post.content}</span>
							</p>
							<div className='mt-2'>
								{post.comments?.map((comment) => (
									<p key={comment.content} className='text-sm'>
										<span>{comment.user.username}</span>
										<span> - {comment.content}</span>
									</p>
								))}
							</div>
							<CommentForm postId={post.id} />
						</div>
					);
				})}
			</div>
			<div className='w-2/5 text-center'>right section</div>
		</div>
	);
};

const CommentForm = ({ postId }: { postId: number }) => {
	const user = useAuth();
	const queryClient = useQueryClient();
	const { register, handleSubmit, resetField } = useForm<createCommentInput>();

	const { mutate } = useMutation(createComment, {
		onSuccess: (response) => {
			resetField('content');
			queryClient.setQueryData<AxiosResponse<QueryPostsResponse[]>>(
				queryKey.posts,
				(data) => {
					return produce(data, (draft) => {
						const target = draft?.data.find((post) => post.id === postId);
						target?.comments?.push({
							user: { id: user!.id, username: user!.email },
							content: response.data as string,
						});
					});
				}
			);
		},
	});

	const onSubmit: SubmitHandler<createCommentInput> = (e) => {
		mutate({ content: e.content, postId });
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type='text'
				placeholder='댓글 남기기'
				className='px-2 py-1 text-sm font-thin border focus:outline-none'
				{...register('content')}
			/>
		</form>
	);
};

export default Home;
