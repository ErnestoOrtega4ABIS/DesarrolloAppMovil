// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient colors={['#055eb1', '#8002b0', '#00ff58']} style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a PracticaExamen</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.buttonWrapper} 
            onPress={() => navigation.navigate('Ahorros')}>
            <Text style={styles.buttonText}>Ir a Ahorros</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.buttonWrapper} 
            onPress={() => navigation.navigate('Perfil')}>
            <Text style={styles.buttonText}>Ir a Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.buttonWrapper} 
            onPress={() => navigation.navigate('Config')}>
            <Text style={styles.buttonText}>Ir a Configuración</Text>
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#fff",
  },
  buttonContainer: {
    flexDirection: "column", 
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWrapper: {
    width: 150,
    backgroundColor: "#ecf0f1", 
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: "black", // Color del texto del botón
    fontSize: 18,
    fontWeight: 'bold',
  },
});
