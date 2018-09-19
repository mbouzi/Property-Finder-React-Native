'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,	
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';

import ListItem from './ListItem'
import PropertyDetails from './PropertyDetails'

export default class SearchResults extends Component {
  _keyExtractor = (item, index) => index;

  _renderItem = ({item, index}) => (
	  <ListItem
	    item={item}
	    index={index}
	    onPressItem={this.onPressItem}
	  />
);

onPressItem = (item, index) => {
  this.props.navigator.push({
		  title: `${item.title} Details`,
		  component: PropertyDetails,
		  passProps: {property: item}
	});
};

  render() {
    return (
      <FlatList
        data={this.props.listings}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

