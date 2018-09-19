import React, { Component } from 'react'
import './App.css'
import styled from 'styled-components'
import { Router, Link } from '@reach/router'
import Jokes from './Jokes'
import { navigate } from '@reach/router/lib/history'

class App extends Component {
	state = {
		randomJoke: [],
		input: ''
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
				<Jokes joke={this.state.randomJoke} />
			</AppContainer>
		)
	}
}

//URL paths i.e. /jokes and /settings in React Router

//Make a Settings Page -- field to change the name of Chuck Norris + Parental Controls (radio button)

const AppContainer = styled.div`
	display: flex;
	justify-content: center;
	background-color: grey;
	margin: 0 auto;
	text-align: center;
	height: 100vh;
`

const Button = styled.button`
	background-color: green;
	color: pink;
`

const Header = styled.div`
	font-size: 36px;
`

export default App
