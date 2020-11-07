import * as React from 'react';
import { StyleSheet, Text, View,TextInput, Alert } from 'react-native';
import db from './Config'
import firebase from 'firebase'

export default class Login extends React.Component{
  constructor(){
    super()
    this.state = {
      emailId: ' ',
      password : ' '
    }
  }

  userLogin = (emailId,password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId,password)
    .then(response=>{
      return Alert.alert("Sucessfuly logged in")
    })
    .catch(error=>{
      var errorCode = error.code
      var errorMessage =error.message
      return Alert.alert (errorMessage)
    })
  }
  render(){
    return(
      <View style  = {styles.container}>

<TextInput 
placeholder = {'email Id'}
keyboardType = 'email-address'
onChangeText = {(text)=>{
this.setState({
  emailId: text
})
}}
value = {this.state.emailId}
/>


<TextInput 
style = {styles.inputBox}
placeholder = {'Password'}
secureTextEntry = {true}
onChangeText = {(text)=>{
this.setState({
  password: text
})
}}
value = {this.state.password}
/>
<TouchableOpacity style = {styles.button}
onPress = {()=>{
  this.userLogin(this.state.emailId,this.state.password)
}}>
<Text style = {styles.buttontext}> Login</Text>
  </TouchableOpacity>
  <TouchableOpacity style = {styles.button} 
  onPress={()=>{
    this.props.navigation.navigate('SignUp')
  }}>
<Text style = {styles.buttontext}> createAccount </Text>
  </TouchableOpacity>
      </View>
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
