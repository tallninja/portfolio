import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Blogs, Home, PageNotFound, Projects } from './pages';

export const App = () => {
	return (
		<BrowserRouter>
			<div className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0'>
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
