import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const client = axios.create({
	baseURL: import.meta.env.VITE_API_URL + '/api',
	headers: {
		Accept: 'application/json,image/*',
	},
});

export const request = async <T>(config: AxiosRequestConfig) => {
	const token = localStorage.getItem('access_token');

	return (await client({
		...config,
		headers: {
			...(token && { Authorization: `Bearer ${token}` }),
		},
	})) as AxiosResponse<T>;
};
