


import * as React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import firebase from 'firebase'
import db from '../Config';

export default class AddTimeTable extends React.Component{

    constructor(){
        super()
        this.state = {
            day: ' ',
            time: ' ',
            subject :  ' ',

        }
    }

    submitTimeTable = ()=>{
        db.collection('TimeTable').add({
            day : this.state.day,
            time : this.state.time,
            subject: this.state.subject
        })
    }
    render(){
        return(
            <KeyboardAvodingView style = {styles.container} behaviour = "padding" enabled> 
            <View>

                <TextInput 
                style = {styles.inputBox}
                placeholder = {'day'}
                onChangeText = {(text)=>{
                    this.setState({
                        day : text
                    })
                }}
                
                />


                <TextInput 
                style = {styles.inputBox}
                placeholder = {'day'}
                onChangeText = {(text)=>{
                    this.setState({
                        time : text
                    })
                }}
                
                />


                <TextInput 
                style = {styles.inputBox}
                placeholder = {'day'}
                onChangeText = {(text)=>{
                    this.setState({
                        subject : text
                    })
                }}
                
                />

                <TouchableOpacity style = {styles.button} 
                onPress = {()=>{
                    this.submitTimeTable()
                }}
                
                >
                    <Text style = {styles.buttonText}> 
                    Submit

                    </Text>


                    </TouchableOpacity>

                </View>
                </KeyboardAvodingView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor : '#222831',
        alignItems : 'center'

    },
    inputBox:{
        backgroundColor : '#00adb5',
        borderColor : '#eeeeee',
        borderRadius  : 5,
        borderWidth   : 2,
        width : 300,
        height : 50,
        marginTop:5

    },
    button:{
        backgroundColor  :'#00adb5',
        borderWidth : 2,
        borderColor : 'white',
        justifyContent :'center',
        marginTop: 20,
        borderRadius : 5

    },
    buttonText:{

        fontWeight  :'bold',
        color : '#fff',
        fontWeight  :'bold',
        fontStyle : 'italic',
        alignItems : 'center'


    }
})
