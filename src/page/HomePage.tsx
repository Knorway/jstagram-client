import { Fragment } from 'react';
import { useQuery } from 'react-query';

import { getPosts } from '../api/fetcher';
import { queryKey } from '../api/queryClient';

const Home = () => {
	const { data } = useQuery(queryKey.posts, getPosts);

	return (
		<Fragment>
			{data?.data.map((e) => {
				const path = `${import.meta.env.VITE_API_URL}/image/${
					e.imgSrc.split('/upload/')[1]
				}`;

				return (
					<div key={path}>
						<img src={path} />
						<p>{e.content}</p>
						<small>{e.createdAt}</small>
					</div>
				);
			})}
		</Fragment>
	);
};

export default Home;
