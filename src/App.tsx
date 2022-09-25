import { Route, Routes } from 'react-router-dom';

import AppLayout from './component/layout/AppLayout';
import AuthRedirectPage from './page/AuthRedirectPage';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import NotFoundPage from './page/NotFoundPage';
import PostCreatePage from './page/PostPage';
import ProfilePage from './page/ProfilePage';
import RegisterPage from './page/RegisterPage';

function App() {
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route path='/' element={<HomePage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/auth-redirect' element={<AuthRedirectPage />} />
				<Route path='/profile' element={<ProfilePage />} />
				<Route path='/post'>
					<Route path='create' element={<PostCreatePage />} />
				</Route>
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}

export default App;
