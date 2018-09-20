import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { Router, Link } from '@reach/router';
import Jokes from './Jokes';
import { navigate } from '@reach/router/lib/history';
import Settings from './Settings';

class App extends Component {
	state = {
		randomJoke: [],
		input: '',
		name: '',
		settings: false
	};

	handleInput = event => {
		this.setState({ input: event.target.value });
	};

	handleJokes = () => {
		const URL = `http://api.icndb.com/jokes/random/${this.state.input}`;
		fetch(URL)
			.then(response => response.json())
			.then(response =>
				this.setState(
					{
						randomJoke: this.state.randomJoke.concat(response.value)
					},
					() => {
						navigate('/jokes');
					}
				)
			);
	};

	settingsState = () => {
		this.setState({ settings: true }, () => navigate('/settings'));
	};

	handleNameInput = event => {
		this.setState({ name: event.target.value });
	};

	handleNameChange = () => {
		this.state.randomJoke.map(val => (
			<div>{val.joke.replace(/Chuck Norris/g, this.state.name)}</div>
		));
	};

	render() {
		return (
			<AppContainer className="App">
				<div>
					<Link to="/">
						<Header>Chuck Norris Jokes</Header>
					</Link>
				</div>
				<div>
					<input onChange={this.handleInput} />
					<Button onClick={this.handleJokes}>Click me</Button>
				</div>
				<div>
					<Button onClick={this.settingsState}>Settings</Button>
				</div>
				<Jokes joke={this.state.randomJoke} />
				<Settings
					display={this.state.settings}
					changeName={this.handleNameChange}
					nameInput={this.handleNameInput}
				/>
			</AppContainer>
		);
	}
}

const AppContainer = styled.div`
	display: flex;
	justify-content: center;
	background-color: grey;
	margin: 0 auto;
	text-align: center;
	height: 100vh;
`;

const Button = styled.button`
	background-color: green;
	color: pink;
`;

const Header = styled.div`
	font-size: 36px;
`;

export default App;
