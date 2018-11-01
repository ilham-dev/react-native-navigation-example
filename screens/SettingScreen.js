import React, { Component } from 'react';
import { View, Text, Button,AsyncStorage,StyleSheet } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';

export default class SettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  keluar = async => {
    AsyncStorage.clear()
    this.props.navigation.navigate('AuthLoading')
  }

  render() {
    return (
      <View style={styles.container}>
        <RkButton onPress={this.keluar}>Keluar</RkButton>
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
