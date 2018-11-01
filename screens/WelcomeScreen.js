import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';

export default class WelcomeScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        {/* <Text> WelcomeScreen </Text> */}
        <RkButton style={styles.button} onPress={()=> this.props.navigation.navigate('Sigin')}>SignIn</RkButton>
        <RkButton style={styles.button} onPress={()=> this.props.navigation.navigate('Signup')}>SignUp</RkButton>
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
    button: {
        margin:2
    }
})