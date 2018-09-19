import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Link } from '@reach/router';
import Jokes from './Jokes';

ReactDOM.render(
	<div>
		<Router>
			<App path="/" />
			<Jokes path="/jokes" />
		</Router>
	</div>,
	document.getElementById('root')
);
registerServiceWorker();
