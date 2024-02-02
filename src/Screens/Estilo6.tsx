import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const Estilo6 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxPurple}></Text>
      <Text style={styles.boxOrange}></Text>
      <Text style={styles.boxGreen}></Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#263238',
        //flexWrap: 'wrap',
        //alignItems: 'center',
        //justifyContent: 'center',
        //width: 300,
        //height: 300,
    },
    boxPurple:{
        width: '95%',
        height: '25%',
        backgroundColor: '#b39ddb',
        borderWidth:10,
        borderColor: 'white',
        top: 10,
        marginLeft: 5,
        //position: 'absolute',
        //flexWrap: 'wrap',
        //position: 'absolute',
        //top: 0,
        //right: 0,
        //top: 50,
        //left: 50,
        
    },
    boxOrange:{
        width: '95%',
        height: '25%',
        backgroundColor: '#ffab91',
        borderWidth:10,
        borderColor: 'white',
        top: 10,
        marginLeft: 5,
        //position: 'absolute',
        //flexWrap: 'wrap',
        //right: 0,
        //bottom: 0,
        //top: 50,
    },
    boxGreen:{
        width: '95%',
        height: '50%',
        backgroundColor: '#a5d6a7',
        borderWidth:10,
        borderColor: 'white',
        top: 10,
        marginLeft: 5,
        //position: 'absolute',
        //flexWrap: 'wrap',
       // alignSelf: 'center'
    }
})
