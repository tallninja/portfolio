import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Blogs, Home, PageNotFound, Projects } from './pages';

import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Container, Engine } from 'tsparticles-engine';

export const App = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {
			// console.log(container);
		},
		[]
	);

	const particlesConfig = require(`./particles.json`);
	console.log(particlesConfig);

	return (
		<div className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0'>
			<div className='flex flex-col justify-between h-screen'>
				<Navbar />
				<main className='mb-auto'>
					<Home />
					<Particles
						id='tsparticles'
						init={particlesInit}
						loaded={particlesLoaded}
						options={particlesConfig}
					/>
				</main>
				<Footer />
			</div>
		</div>
	);
};
