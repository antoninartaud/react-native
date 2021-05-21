import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export default class App extends Component {
  state = {
    inputLogin: [],
    password: [],
  };

  handleInputLogin = (event) => {
    console.log("i'm in handle inputText");
    console.log('event', event.nativeEvent.Text);
    // console.log('e.target.value', e.target.value);

    //   this.setState({
    //     textInput: e.target.value,
    //   });
  };

  handleInputPassword = () => {
    console.log("i'm in handle input password");
  };

  render() {
    // console.log('this.state.inputLogin', this.state.inputLogin);
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Login'
          // defaultvalue='You can type now !'
          onChangeText={this.handleInputLogin}
          style={styles.inputStyle}
        />
        <TextInput
          placeholder='Password'
          // defaultvalue='You can type now2 !'
          onChangeText={this.handleInputPassword}
          style={styles.inputStyle}
        />
        <Button onPress={() => Alert.alert('Form submitted')} title='Submit' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
