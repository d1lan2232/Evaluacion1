import { StyleSheet, Text, View } from "react-native"

export const Estilo3 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxPurple}></View>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxGreen}></View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#263238',
        //alignItems: 'center',
        justifyContent: 'center',
        //width: 300,
        //height: 300,
    },
    boxPurple:{
        width: 100,
        height: 100,
        backgroundColor: '#b39ddb',
        borderWidth:10,
        borderColor: 'white',
        //position: 'relative',
        position: 'absolute',
        right: 0,
        //top: 50,
        //left: 50,
        bottom: 450,
        
    },
    boxOrange:{
        width:100,
        height: 100,
        marginLeft: 165,
        backgroundColor: '#ffab91',
        borderWidth:10,
        borderColor: 'white',
        position:'absolute',
        left: 0,
        top: 450,
        alignSelf: 'center',
    },
    boxGreen:{
        width:100,
        height: 100,
        backgroundColor: '#a5d6a7',
        borderWidth:10,
        borderColor: 'white',
        position:'absolute',
        left: 0,
    }
})