import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import db from './Config'
import firebase from 'firebase'

export default class HomeScreen extends React.Component{
  render(){
    return(
      <View></View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
