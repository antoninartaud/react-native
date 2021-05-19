import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ViewTest extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'white', padding: 30 }}>
        <Text style={[styles.textMargin, { fontSize: 30 }]}>Hello</Text>
        <Text style={[styles.textMargin, { textAlign: 'center' }]}>Native</Text>
        <Text style={[styles.textMargin, { fontWeight: 'bold' }]}>World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textMargin: {
    marginTop: 80,
    marginBottom: 80,
  },
});
