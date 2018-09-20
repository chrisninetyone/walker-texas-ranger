import React, { Component } from 'react'
import './App.css'
import styled from 'styled-components'
import { Router, Link } from '@reach/router'
import Jokes from './Jokes'
import { navigate } from '@reach/router/lib/history'
import Settings from './Settings'

class App extends Component {
	state = {
		randomJoke: [],
		input: '',
		name: '',
		settings: false
	}

	handleInput = event => {
		this.setState({ input: event.target.value })
	}

	handleJokes = () => {
		const URL = `http://api.icndb.com/jokes/random/${this.state.input}`
		fetch(URL)
			.then(response => response.json())
			.then(response =>
				this.setState(
					{
						randomJoke: this.state.randomJoke.concat(response.value)
					},
					() => {
						navigate('/jokes')
					}
				)
			)
	}

	settingsState = () => {
		this.setState({ settings: true }, () => navigate('/settings'))
	}

	handleNameInput = event => {
		this.setState({ name: event.target.value })
	}

	handleNameChange = () => {
		this.state.randomJoke.map(val => (
			<div>{val.joke.replace(/Chuck Norris/g, this.state.name)}</div>
		))
	}

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
					<Button onClick={this.settingsState}>Settings</Button>
				</div>
				<JokesContainer>
					<Jokes joke={this.state.randomJoke} />
				</JokesContainer>
				<Settings
					display={this.state.settings}
					changeName={this.handleNameChange}
					nameInput={this.handleNameInput}
				/>
			</AppContainer>
		)
	}
}

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
	/* background-color: grey; */
	margin: 0 auto;
	text-align: center;
    height: 100vh;
    input {
        font-size: 24px;
    }
    a {
        text-decoration: none;
    }
`

const JokesContainer = styled.div`
	display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`

const Button = styled.button`
    font-size: 24px;
    border-radius: 5px;
    margin: 5px;
    border: 1px solid lightblue;
    &:hover {
        background-color: lightblue;
        color: white;
        border: 1px solid lightblue;
        cursor: pointer;
    }
`

const Header = styled.div`
    font-size: 36px;
    text-decoration: none;
    font-family: Roboto;
`

export default App
