import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

class App extends Component {
	state = {
		randomJoke: [],
		input: ''
	};

	handleInput = event => {
		this.setState({ input: event.target.value });
	};

	handleJokes = () => {
		const URL = `http://api.icndb.com/jokes/random/${this.state.input}`;
		fetch(URL)
			.then(response => response.json())

			.then(response =>
				this.setState({
					randomJoke: this.state.randomJoke.concat(response.value)
				})
			);
	};

	render() {
		return (
			<AppContainer className="App">
				<div>
					<Header>Chuck Norris Jokes</Header>
				</div>
				<div>
					<input onChange={this.handleInput} />
					<Button onClick={this.handleJokes}>Click me</Button>
				</div>
				<Jokes>
					{this.state.randomJoke.map(val => (
						<div>{val.joke}</div>
					))}
				</Jokes>
			</AppContainer>
		);
	}
}

const AppContainer = styled.div`
	background-color: grey;
	margin: 0 auto;
	text-align: center;
`;

const Button = styled.button`
	background-color: green;
	color: pink;
`;

const Header = styled.div`
	font-size: 36px;
`;

const Jokes = styled.div`
	display: flex;
	justify-content: space-between;
	color: pink;
`;

export default App;
