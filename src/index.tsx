import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const root = ReactDOM.createRoot(
	document.querySelector('#root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<h1>Hello World !</h1>
	</React.StrictMode>
);
