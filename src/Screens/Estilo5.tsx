import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Estilo5 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxPurple}></Text>
      <Text style={styles.boxOrange}></Text>
      <Text style={styles.boxGreen}></Text>
    </View>
  );
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#263238',
        flexDirection: 'row',
        //flexWrap: 'wrap',
        //alignItems: 'center',
        justifyContent: 'space-between',
        //width: 300,
        //height: 300,
    },
    boxPurple:{
        width:100,
        height: '95%',
        backgroundColor: '#b39ddb',
        borderWidth:10,
        borderColor: 'white',
        top: 10,
        left: 0,
        //position: 'absolute',
        //flexWrap: 'wrap',
        //position: 'absolute',
        //top: 0,
        //right: 0,
        //top: 50,
        //left: 50,
        
    },
    boxOrange:{
        width:100,
        height: '95%',
        backgroundColor: '#ffab91',
        borderWidth:10,
        borderColor: 'white',
        top: 10,
        //position: 'absolute',
        //flexWrap: 'wrap',
        //right: 0,
        //bottom: 0,
        //top: 50,
    },
    boxGreen:{
        width:100,
        height: '95%',
        backgroundColor: '#a5d6a7',
        borderWidth:10,
        borderColor: 'white',
        top: 10,
        marginRight: 0,
        //position: 'absolute',
        //flexWrap: 'wrap',
       // alignSelf: 'center'
    }
})


