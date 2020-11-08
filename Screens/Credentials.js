import * as React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';
import db from './Config'
import firebase from 'firebase'

export default class Credentials extends React.Component{
  constructor(){
    super()
    this.state = {
      name: ' ',
      class:  ' ',
      section : ' ',
      schoolName: ' '
    
    }
  }

  submitData = ()=>{

  }
  render(){
    return(
      <View style = {styles.container}>
     <TextInput 
     style = {styles.inputBox}
     placeholder = {'Name of Student'}
     onChangeText = {(text)=>{
      this.setState({
        name : text
      })
     }}
     
     />
   <TextInput 
     style = {styles.inputBox}
     placeholder = {'class'}
     onChangeText = {(text)=>{
      this.setState({
        class : text
      })
     }}
     
     />

<TextInput 
     style = {styles.inputBox}
     placeholder = {'section'}
     onChangeText = {(text)=>{
      this.setState({
        section : text
      })
     }}
     
     />
<TextInput 
     style = {styles.inputBox}
     placeholder = {'Name of Student'}
     onChangeText = {(text)=>{
      this.setState({
        schoolName: text
      })
     }}
     
     />

     <TouchableOpacity style = {styles.button} 
     onPress = {()=>{
       this.submitdata()
     }}
     
     >
       <Text style = {styles.buttonText}> Submit</Text>
       
       
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
  button:{
    backgroundColor : "blue",
    borderColor : 'black',
    borderRadius : 10,
    width:'80%',
    height:  50
  },
  buttonText:{
    fontSize:  20,
    fontWeight : 'bold'
  }
});
