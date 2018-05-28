import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {isShowingText: true};
	}

	render() {
		let display = this.state.isShowingText ? this.props.text : ' ';
		return (
			<Text>Dashboard!</Text>
		);
	}
}