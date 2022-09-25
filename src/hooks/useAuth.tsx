import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { queryKey } from '../api/queryClient';
import { AppUser } from '../api/types';

export const useAuth = () => {
	const { data } = useQuery<AxiosResponse<AppUser>>(queryKey.validation, {
		refetchOnMount: false,
	});

	return data?.data;
};
