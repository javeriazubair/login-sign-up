import React, { Component } from 'react';
import { } from 'react-native';
import { Button, Card, CardSection } from './common';
import { loginscreen } from './Router';

class login extends Component {

	render() {
		return (
			<loginscreen />,
			<Card>
			<CardSection>
			<Button onPress={this.props.navigation.navigate('SignupForm')}>
		login
		</Button>
		</CardSection>
		</Card>

		);
}
}

export default login;
