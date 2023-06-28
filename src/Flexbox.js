import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text
}from 'react-native'

export default class Flexbox extends Component{
    render(){
        return(
            <View style={styles.container}>
             <Text style={styles.text}>Hello React </Text>
             <Text style={styles.text}> Native</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'row'
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight:'bold'
    
  }
})