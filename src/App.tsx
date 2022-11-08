import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Blogs, Home, PageNotFound, Projects } from './pages';

export const App = () => {
	return (
		<BrowserRouter>
			<div className='antialiased bg-white text-black dark:bg-black dark:text-white h-screen'>
				<Navbar />
				<Routes>
					<Route path='/'>
						<Route index element={<Home />} />
						<Route path='blogs' element={<Blogs />} />
						<Route path='projects' element={<Projects />} />
					</Route>
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
