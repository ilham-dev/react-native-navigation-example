import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator,AsyncStorage, TouchableOpacity, TouchableHighlight } from 'react-native';
import {createSwitchNavigator, createStackNavigator,createDrawerNavigator, createBottomTabNavigator,DrawerItems} from 'react-navigation';
import {Container,Content,Header,Body} from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import WelcomScreen from './screens/WelcomeScreen';
import SiginScreen from './screens/SiginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';

const AuthStackNavigator = createStackNavigator({
  Welcome : WelcomScreen,
  Sigin : SiginScreen,
  Signup : SignupScreen
})

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen:{
    screen:HomeScreen
  },
  SettingScreen:{
    screen:SettingScreen
  }
})

const AppStackNavigator = createStackNavigator({
  AppTabNavigator:{
    screen: AppTabNavigator,
    navigationOptions: ({navigation}) => ({
      title: "PinjamAja",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <View style={{paddingHorizontal:10}}>
                <Icon name="md-menu" size={24}></Icon>
            </View>
        </TouchableOpacity>
      )
    })
  }
})



const costumComponentDrawer = (props) => (
  <Container>
      <Header style={{height:200, backgroundColor:'white'}}>
          <Body>
              <Image style={styles.imageDrawer} source={require('./assets/icon.png')}></Image>
          </Body>
      </Header>
      <Content>
          <DrawerItems {...props}/>
      </Content>
  </Container>
)

const MyComponent = (props ) => (
  this.props.navigation.navigate('Welcome')
)

const AppDrawerNavigator = createDrawerNavigator({
  Home : AppStackNavigator,
  Profile : WelcomScreen,
},{
  initialRouteName: 'Home',
  drawerPosition: 'left',
  contentComponent:costumComponentDrawer
})


export default createSwitchNavigator({
  AuthLoading : AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator,
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageDrawer:{
    height:150,
    width:150,
    borderRadius:75
  }
});
