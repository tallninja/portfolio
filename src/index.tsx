import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import './index.css';

const root = ReactDOM.createRoot(
	document.querySelector('#root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<div className='antialiased bg-white text-black dark:bg-black dark:text-white h-screen font-mono'>
			<App />
		</div>
	</React.StrictMode>
);
