import { Text, View, StyleSheet } from 'react-native';

export const Estilo9 = () => {
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
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
      },
      boxPurple:{
          width:100,
          height: 100,
          backgroundColor: '#b39ddb',
          borderWidth:10,
          borderColor: 'white',
          //position: 'relative',
          //position: 'absolute',
          top: 0,
          right: 0,
          //top: 50,
          //left: 50,
          
      },
      boxOrange:{
          width:100,
          height: 100,
          backgroundColor: '#ffab91',
          borderWidth:10,
          borderColor: 'white',
          //position:'absolute',
          right: 0,
          bottom: 0,
          top: 70,
          //top: 50,
      },
      boxGreen:{
          width:100,
          height: 100,
          backgroundColor: '#a5d6a7',
          borderWidth:10,
          borderColor: 'white',
          //position:'absolute',
      }
  })