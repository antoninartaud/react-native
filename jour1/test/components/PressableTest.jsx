import React, { Component } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

export default class PressableTest extends Component {
  render() {
    return (
      <Pressable>
        <Text style={styles.textPressable} onPress={() => this.props.onPress()}>
          Press on me please...
        </Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  textPressable: {
    padding: 20,
    fontSize: 20,
    color: 'black',
    backgroundColor: 'yellow',
    textAlign: 'center',
    marginTop: 20,
  },
});
