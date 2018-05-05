import React, { Component } from 'react';

import { SellPage0 } from './SellPage0.js';
import { SellPage1 } from './SellPage1';
import { SellPage2 } from './SellPage2';
import { SellPage3 } from './SellPage3';
import { SellPage4 } from './SellPage4';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
	Home: {
		/**/
		screen: SellPage0, headerMode: 'none', navigationOptions: { header: null }
	},
	SellPage1: {
		/**/
		screen: SellPage1, headerMode: 'none', navigationOptions: { header: null }
	},
	SellPage2: {
		/**/
		screen: SellPage2, headerMode: 'none', navigationOptions: { header: null }
	},
	SellPage3: {
		/**/
		screen: SellPage3, headerMode: 'none', navigationOptions: { header: null }
	},
	SellPage4: {
		/**/
		screen: SellPage4, headerMode: 'none', navigationOptions: { header: null }
	},
}, {
		animationEnabled: false,
		initialRouteName: 'Home', // 默认显示界面
		mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
		headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏

	});

export default App;