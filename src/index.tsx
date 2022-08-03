import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Cardapio from './pages/Cardapio/Cardapio';
import Router from 'routes';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Router></Router>
	</React.StrictMode>
);
