import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const Estilo1 = () => {
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
        flex: 1,
        backgroundColor: '#263238',
    },
    boxPurple:{
        width:100,
        height: 100,
        backgroundColor: '#b39ddb',
        borderWidth:10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,     
    },
    boxOrange:{
        width:100,
        height: 100,
        backgroundColor: '#ffab91',
        borderWidth:10,
        borderColor: 'white',
        position:'absolute',
        right: 0,
        bottom: 0,
    },
    boxGreen:{
        flex: 1,
        width:100,
        height: '76%',
        backgroundColor: '#a5d6a7',
        borderWidth:10,
        borderColor: 'white',
        position:'absolute',
        bottom: 100,
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        right: 0,
    }
})

