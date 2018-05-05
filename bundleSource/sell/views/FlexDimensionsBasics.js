import React, {
	Component
} from 'react';
import {
	FlatList, StyleSheet, Text, View
} from 'react-native';

export class FlexDimensionsBasics extends Component {
	render() {
		return (
			<FlatList
				data={[{ key: 'a' }, { key: 'b' }]}
				renderItem={({ item }) => <Text>{item.key}</Text>}
			/>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
	},
})
