import React, { Component } from 'react';
import { View, Text,StyleSheet, ActivityIndicator,AsyncStorage } from 'react-native';

export default class AuuthLoadingScreen extends Component {

  constructor(){
    super();
    this.loadApp();
  }

  loadApp = async () => {
        const userToken = await AsyncStorage.getItem('userToken')
        this.props.navigation.navigate(userToken ? 'App' : 'Auth')
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Home</Text> */}
        <ActivityIndicator/>
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
