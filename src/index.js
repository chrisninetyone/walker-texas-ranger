import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Link } from '@reach/router';
import Jokes from './Jokes';
import Settings from './Settings';
import "./index.css"

ReactDOM.render(
	<div>
		<Router>
			<App path="/" />
			<Jokes path="/jokes" />
			<Settings path="/settings" />
		</Router>
	</div>,
	document.getElementById('root')
);
registerServiceWorker();
