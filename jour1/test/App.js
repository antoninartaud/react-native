import React, { Component } from 'react';
import {
  ActivityIndicator,
  Button,
  Pressable,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'blue' }}>
        <View style={{ backgroundColor: 'white', padding: 30 }}>
          <Text style={[styles.textMargin, { fontSize: 30 }]}>Hello</Text>
          <Text style={[styles.textMargin, { textAlign: 'center' }]}>
            Native
          </Text>
          <Text style={[styles.textMargin, { fontWeight: 'bold' }]}>World</Text>
        </View>
        <Image
          source={{
            uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png',
          }}
          style={{ width: 400, height: 100 }}
        ></Image>
        <Image
          source={require('./assets/konexio-logo_1.png')}
          style={{ width: 400, height: 100 }}
        ></Image>
        <Pressable>
          <Text style={styles.textPressable} onPress={() => alert('Pressed !')}>
            Press on me please...
          </Text>
        </Pressable>
        <ActivityIndicator />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textMargin: {
    marginTop: 80,
    marginBottom: 80,
  },
  textPressable: {
    padding: 20,
    fontSize: 20,
    color: 'black',
    backgroundColor: 'yellow',
    textAlign: 'center',
    marginTop: 20,
  },
});
