import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 1,
			refetchOnWindowFocus: false,
			// refetchOnMount: false,
		},
	},
});

export const queryKey = {
	posts: ['posts'],
	validation: ['validation'],
} as const;
