import { useAuth } from '../hooks/useAuth';

const ProfilePage = () => {
	const user = useAuth();

	const logout = () => {
		localStorage.removeItem('access_token');
		location.reload();
	};

	return (
		<div>
			<pre>{JSON.stringify(user, null, 2)}</pre>
			<button onClick={logout}>logout</button>
		</div>
	);
};

export default ProfilePage;
