import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Platform,
	Navigator,
	TouchableHighlight,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Dimensions,
} from "react-native";

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const scale = ScreenWidth / 375;

const pic = require('./img/snippets.png');

export class SellPage0 extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (<View>
			<Text>Page0</Text>
			<TouchableOpacity activeOpacity={0.5}
				style={styles.lightsOpacityStyle}
				onPress={() => {
					//方法
				}}>
				<Text>Page0Btn</Text>
			</TouchableOpacity>
		</View>)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor: '#fff',
	},
	lightsOpacityStyle: {
		height: 54,
		justifyContent: 'center',
		alignItems: 'center'
	},
});