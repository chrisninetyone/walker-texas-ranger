import React from 'react';
import { navigate } from '@reach/router';

export default class Jokes extends React.Component {
	componentDidMount() {
		this.props.joke === undefined && navigate('/');
	}
	render() {
		return this.props.joke ? (
			this.props.joke.map(val => <div>{val.joke.replace(/&quot;/g, '"')}</div>)
		) : (
			<div />
		);
	}
}
