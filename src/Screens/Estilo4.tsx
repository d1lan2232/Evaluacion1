import { Text, View, StyleSheet } from 'react-native';

export const Estilo4 = () => {
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
            //alignItems: 'center',
            //justifyContent: 'center',
            //width: 300,
            //height: 300,
        },
        boxPurple:{
            width:100,
            height: 100,
            backgroundColor: '#b39ddb',
            borderWidth:10,
            borderColor: 'white',
            //position: 'relative',
            position: 'absolute',
            top: 10,
            left: 0,
            //top: 50,
            //left: 50,
            
        },
        boxOrange:{
            width:100,
            height: 100,
            backgroundColor: '#ffab91',
            borderWidth:10,
            borderColor: 'white',
            position:'absolute',
            right: 0,
            bottom: 10,
            //top: 50,
        },
        boxGreen:{
            width:100,
            height: 100,
            backgroundColor: '#a5d6a7',
            borderWidth:10,
            borderColor: 'white',
            position:'absolute',
            bottom: '50%',
            marginLeft: 150,
        }
    })
    