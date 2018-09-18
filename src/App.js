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
						<div>{val.joke.replace(/&quot;/g, '"')}</div>
					))}
				</Jokes>
			</AppContainer>
		);
	}
}


//URL paths i.e. /jokes and /settings in React Router

//Make a Settings Page -- field to change the name of Chuck Norris + Parental Controls (radio button)

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
	justify-content: center;
	align-content: center;
	color: pink;
	position: relative;
	overflow: visible;
	width: 100px;
`;

export default App;
