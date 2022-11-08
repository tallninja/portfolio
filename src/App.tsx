import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Blogs, Home, PageNotFound, Projects } from './pages';

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
