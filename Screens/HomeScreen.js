import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import db from './Config'
import firebase from 'firebase'


export default class HomeScreen extends React.Component{
  constructor(){
    super()
    this.state = {
      timetable : [],
      
    }
    this.date = null
  }

  getTimeTable = ()=>{
this.data = db
.collection('TimeTable').onSnapShot(snapshot=>{
  var table = snapshot.docs.map(document=>document.data())
  this.setState({
    timetable : table
  })
})
  }

  keyExtractor = (item,index)=>index.toString()


  renderItem = ({item,i})=>{
<ListItem 
key  =  {i}
title  = {item.day}
subtitle = {item.matter}
titleStyle = {styles.titleStyle}
containerStyle = {styles.list}
bottomDivider

/>
  }

  componentDidMount(){
    this.getTimeTable()
  }
  render(){
    return(
      <View style = {styles.container}>
        {
          this.state.timetable.length === 0
          ?(
            <View>
              <Text > No Data Available</Text>
              </View>
          )
          :(
            <FlatList 
            keyExtractor = {this.keyExtractor}
            data = {this.timetable}
            renderItem = {this.renderItem}
            />
          )
          
        }

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
    width : 20,
    alignSelf : 'center',
    backgroundColor : 'powderblue',
    borderRadius : 20

  }
});
