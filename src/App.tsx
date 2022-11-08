import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Blogs, PageNotFound, Projects } from './pages';
import { Home } from './pages';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
};
