import React, { Component } from 'react';
import {
  ActivityIndicator,
  // Pressable,
  Image,
  ScrollView,
  StyleSheet,
  // Text,
  // View,
} from 'react-native';

import PressableTest from './components/PressableTest';
import ViewTest from './components/ViewTest';

export default class App extends Component {
  state = {
    showLoading: true,
  };

  toggleShowLoading = () => {
    console.log('in toggleShowloading');
    const currentState = this.state.showLoading;
    console.log('currentState:', currentState);
    this.setState({
      showLoading: !currentState,
    });
  };

  render() {
    let isShowloading = this.state.showLoading;
    console.log('isShowloading in render:', isShowloading);
    return (
      <ScrollView style={{ backgroundColor: 'blue' }}>
        <ViewTest />
        {/* <View style={{ backgroundColor: 'white', padding: 30 }}>
          <Text style={[styles.textMargin, { fontSize: 30 }]}>Hello</Text>
          <Text style={[styles.textMargin, { textAlign: 'center' }]}>
            Native
          </Text>
          <Text style={[styles.textMargin, { fontWeight: 'bold' }]}>World</Text>
        </View> */}
        <Image
          source={{
            uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png',
          }}
          style={styles.image}
        ></Image>
        <Image
          source={require('./assets/konexio-logo_1.png')}
          style={styles.image}
        ></Image>
        <PressableTest onPress={this.toggleShowLoading} />
        {/* <Pressable>
          <Text
            style={styles.textPressable}
            onPress={() => this.toggleShowloading}
          >
            Press on me please...
          </Text>
        </Pressable> */}
        {isShowloading ? (
          <ActivityIndicator style={styles.activityIndicator} />
        ) : null}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  activityIndicator: {
    marginTop: 40,
    marginBottom: 40,
  },
  image: {
    width: 400,
    height: 100,
  },
  // textPressable: {
  //   padding: 20,
  //   fontSize: 20,
  //   color: 'black',
  //   backgroundColor: 'yellow',
  //   textAlign: 'center',
  //   marginTop: 20,
  // },
  // textMargin: {
  //   marginTop: 80,
  //   marginBottom: 80,
  // },
});
