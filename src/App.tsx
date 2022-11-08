import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Blogs, Home, PageNotFound, Projects } from './pages';

import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Container, Engine } from 'tsparticles-engine';

export const App = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine);
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {
			console.log(container);
		},
		[]
	);

	return (
		<BrowserRouter>
			<div className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0'>
				<Particles
					id='tsparticles'
					url='https://github.com/tallninja/portfolio/blob/master/public/particles2.json'
					init={particlesInit}
					loaded={particlesLoaded}
				/>
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
