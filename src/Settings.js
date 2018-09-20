import React, { Component } from 'react'
import styled from 'styled-components'
import { runInThisContext } from 'vm'
import { navigate } from '@reach/router'
import { Button } from './App'

const SettingsStyles = styled.div`
	height: auto;
	border: 3px solid blue;
	padding: 20px;
	margin: 0 auto;
	width: 600px;
	font-size: 32px;
	input {
		font-size: 32px;
	}
	button {
		font-size: 32px;
	}
`

//Parental Controls--filter by categories ("nerdy", "explicit", etc)

const Settings = props => {
	return (
		<SettingsStyles>
			<div>
				<input
					placeholder="Change Chuck's Name"
					onChange={props.nameInput}
				/>
				<Button onClick={props.nameChange}>Submit Changes</Button>
			</div>
			<div>
				Parental Controls:
				<label>
					None
					<input type="radio" />
				</label>
				<label>
					Kid-Friendly
					<input type="radio" />
				</label>
			</div>
		</SettingsStyles>
	)
}

export default Settings
