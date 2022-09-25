import { request } from './httpClient';
import {
  AppUser,
  QueryPostsResponse,
  UploadPostInput,
  UploadPostResponse,
} from './types';

export const validateAuth = async () => {
	const token = localStorage.getItem('access_token');
	if (!token) return null;

	return await request<AppUser>({
		url: '/auth/validate',
		method: 'post',
	});
};

export const getPosts = async () => {
	return await request<QueryPostsResponse[]>({ url: '/post' });
};

export const uploadPost = async (input: UploadPostInput) => {
	const form = new FormData();
	form.set('content', input.content);
	form.set('image', input.image[0]);

	return await request<UploadPostResponse>({
		url: '/post',
		method: 'post',
		data: form,
	});
};
