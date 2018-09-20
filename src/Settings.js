import React, { Component } from 'react';
import styled from 'styled-components';
import { runInThisContext } from 'vm';

const SettingsStyles = styled.div`
	background-color: red;
`;

//Parental Controls--filter by categories ("nerdy", "explicit", etc)

const Settings = props => {
	console.log(props.display);
	return props.display ? (
		<SettingsStyles>
			<div>
				<input placeholder="Change Chuck's Name" onChange={props.nameInput} />
				<button onClick={props.nameChange}>Submit Changes</button>
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
	) : (
		<div />
	);
};

export default Settings;
