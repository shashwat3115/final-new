import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp'



export default class App extends React.Component{
  render(){
    return(
     <AppContainer/>
    )
  }
  
}

const AppNavigator = createSwitchNavigator({
  Login:LoginScreen,
  SignUp: SignUpScreen
})

const AppContainer = createAppContainer(AppNavigator)



