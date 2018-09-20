import React from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components'


export default class Jokes extends React.Component {
	componentDidMount() {
		this.props.joke === undefined && navigate('/');
	}
	render() {
		return this.props.joke ? (
			this.props.joke.map(val => <JokeCard>{val.joke.replace(/&quot;/g, '"')}</JokeCard>)
		) : (
			<div />
		);
	}
}

const JokeCard = styled.div`
    height: auto;
    border: 3px solid black;
    padding: 20px;
    margin: 10px;
    width: 150px;
`