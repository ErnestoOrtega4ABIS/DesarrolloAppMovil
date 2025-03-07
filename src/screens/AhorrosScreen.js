import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from 'react-native-vector-icons';  // Importa el icono de FontAwesome

export default function AhorrosScreen({ navigation }) {
  const [ahorro, setAhorro] = useState(0);

  return (
    <LinearGradient colors={['#055eb1', '#8002b0', '#00ff58']} style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Ahorros</Text>
        <Text style={styles.counter}>${ahorro}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.buttonWrapper, styles.saveButton]} 
            onPress={() => setAhorro(ahorro + 10)}>
            <FontAwesome name="plus-circle" size={30} color="white" />
            <Text style={styles.buttonText}>Ahorrar $10</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.buttonWrapper, styles.resetButton]} 
            onPress={() => setAhorro(0)}>
            <FontAwesome name="refresh" size={30} color="white" />
            <Text style={styles.buttonText}>Reiniciar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#fff",
  },
  counter: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#fff",
    width: '100%',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  buttonWrapper: {
    width: 120, 
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#5cc235',
  },
  resetButton: {
    backgroundColor: '#d12e0c',
  },
});
