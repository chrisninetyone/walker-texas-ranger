import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		randoJoke: ''
	};

	componentDidMount = () => {
		const URL = 'http://api.icndb.com/jokes/random';
		fetch(URL)
			.then(response => response.json())
			.then(response => console.log(response))
			.then(response => this.setState({ randoJoke: response }));
	};

	render() {
		return (
			<div className="App">
				<div>
					<header>Chuck Norris Jokes</header>
				</div>
				<div>
					<input />
					<button>Clickeme</button>
				</div>
			</div>
		);
	}
}

export default App;
