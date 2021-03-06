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

export class MessageStartPage extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.messageCell}>
					<View style={styles.messageRow}>
						<Image source={pic} style={styles.sidePic} />
						<Text style={styles.msgText}>销售申请</Text>
					</View>

					<View style={styles.messageRow}>
						<Image source={pic} style={styles.sidePic} />
						<Text style={styles.msgText}>销售申请</Text>
					</View>

					<View style={styles.messageRow}>
						<Image source={pic} style={styles.sidePic} />
						<Text style={styles.msgText}>销售申请</Text>
					</View>

					<View style={styles.messageRow}>
						<Image source={pic} style={styles.sidePic} />
						<Text style={styles.msgText}>销售申请</Text>
					</View>

				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor: '#fff',
	},
	messageCell: {
		paddingLeft: 15 * scale
	},
	messageRow: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderStyle: 'solid',
		borderBottomColor: '#E4E4E4',
		height: 68 * scale,
		alignItems: 'center',
	},
	sidePic: {
		width: 34 * scale,
		height: 34 * scale
	},
	msgText: {
		fontSize: 14 * scale,
		marginLeft: 12 * scale
	}
});