'use strict';

import React, {
	Component
} from 'react';

import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';

class RNProject extends React.Component {

	render() {

		return (
			<View style={styles.container}>
				<Text style={styles.hello}>
					RN的页面
				</Text>
			</View>

		)

	}

}

var styles = StyleSheet.create({

	container: {
		justifyContent: 'center',
		height: 100
	},

	hello: {
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: "#FF4081",


	},

});

AppRegistry.registerComponent('RNProject', () => RNProject);