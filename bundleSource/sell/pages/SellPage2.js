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

export class SellPage2 extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		<View>
			<Text>Page2</Text>
			<TouchableOpacity activeOpacity={0.5}
				style={styles.lightsOpacityStyle}
				onPress={() => {
					//方法
				}}>>
				<Text>Page2Btn</Text>
			</TouchableOpacity>
		</View>
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
		width: 48,
		justifyContent: 'center',
		alignItems: 'center'
	},
});