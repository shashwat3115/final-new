import * as React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import firebase from "firebase";

export default class Signup extends React.Component{
  constructor(){
    super()
    this.state = {
      emailId : "",
      password : "",
      confirmPassword : ""

    }
  }
  userSignup = (emailId,password,confirmPassword)=>{
    if(password !== confirmPassword){
      return Alert.alert("Password dosent match")
    }
    else {                    
      firebase.auth().createUserWithEmailAndPassword(emailId,password)
      .then(response=>{
        return Alert.alert("User added Sucessfuly")
      })
      .catch(error=>{
        var errorCode = error.code
        var errorMessage =error.message
        return Alert.alert (errorMessage)
      })
    }
  }
  render(){
    return(
      <View>
        <TextInput
        style = {styles.InputBox}
        placeholder = {"Email Id"}
        onChangeText = {(text)=>{
          this.setState({
            emailId : text,

          })
        }}
        />
        <TextInput
        style = {styles.InputBox}
        placeholder = {"Password"}
        onChangeText = {(text)=>{
          this.setState({
            password : text,
            
          })
        }}
        />
        <TextInput
        style = {styles.InputBox}
        placeholder = {"Confirm Password"}
        onChangeText = {(text)=>{
          this.setState({
            confirmPassword : text,
            
          })
        }}
        />
        <TouchableOpacity style = {styles.button}
        onPress = {()=>{
          this.userSignup(this.state.emailId, this.state.password, this.state.confirmPassword)
        }}>
          <Text>Signup</Text>
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
