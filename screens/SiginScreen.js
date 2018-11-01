import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, AsyncStorage } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';

export default class SiginScreen extends Component {

    masuk = async() => {
        await AsyncStorage.setItem('userToken','akun')
        this.props.navigation.navigate('App')
    }

    render() {
    return (
      <View style={styles.container}>
        <RkButton onPress={this.masuk}>Masuk</RkButton>
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
    }
})
