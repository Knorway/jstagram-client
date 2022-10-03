import { createCommentInput } from '../page/HomePage';
import { UploadPostInput } from '../page/PostPage';
import { request } from './httpClient';
import { AppUser, CreatePostResponse, QueryPostsResponse } from './types';

export const validateAuth = async () => {
	const token = localStorage.getItem('access_token');
	if (!token) return null;

	return await request<AppUser>({
		url: '/auth/validate',
		method: 'post',
	});
};

export const getMainPagePosts = async () => {
	return await request<QueryPostsResponse[]>({ url: '/post?page=0&limit=10' });
};

export const createPost = async (input: UploadPostInput) => {
	const form = new FormData();
	form.set('content', input.content);
	form.set('image', input.image[0]);

	return await request<CreatePostResponse>({
		url: '/post',
		method: 'post',
		data: form,
	});
};

export const createComment = async (input: { postId: number } & createCommentInput) => {
	return await request({ url: '/post/comment', method: 'post', data: input });
};

export const createLike = async (input: { postId: number }) => {
	return await request({ url: '/post/like', method: 'post', data: input });
};
