import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface InicioScreenProps {}

export const InicioScreen: React.FC<InicioScreenProps> = () => {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const [numerosPares, setNumerosPares] = useState<number[]>([]);
  const [numerosImpares, setNumerosImpares] = useState<number[]>([]);

  const clasificarNumeros = () => {
    const pares = numeros.filter((numero) => numero % 2 === 0);
    const impares = numeros.filter((numero) => numero % 2 !== 0);
    setNumerosPares([...pares]);
    setNumerosImpares([...impares]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bienvenido</Text>
      <Text style={styles.vector}>Vector: {numeros.join(', ')}</Text>
      <TouchableOpacity style={styles.button} onPress={clasificarNumeros}>
        <Text style={styles.buttonText}>Clasificar</Text>
      </TouchableOpacity>
      
      <Text style={styles.resultado}>Números Pares: {numerosPares.join(', ')}</Text>
      <Text style={styles.resultado}>Números Impares: {numerosImpares.join(', ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
  },
  texto: {
    color: 'black',
    fontSize: 35,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
  },
  vector: {
    color: 'black',
    top: 25,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#d0efff',
    padding: 10,
    borderRadius: 10,
    top: 50,
    width: '50%',
    marginLeft: '25%',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },

  resultado: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 70,
    fontWeight: 'bold',
  },
});
