// src/screens/ConfigScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function ConfigScreen({ navigation }) {
  const showAlert = (configOption) => {
    Alert.alert('Configuración', `Has seleccionado: ${configOption}`);
  };

  return (
    <LinearGradient colors={['#055eb1', '#8002b0', '#00ff58']} style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Configuraciones</Text>
        <TouchableOpacity 
          style={[styles.buttonWrapper, styles.changeThemeButton]} 
          onPress={() => showAlert('Cambiar Tema')}>
          <Text style={styles.buttonText}>Cambiar Tema</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.buttonWrapper, styles.changeLanguageButton]} 
          onPress={() => showAlert('Cambiar Idioma')}>
          <Text style={styles.buttonText}>Cambiar Idioma</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.buttonWrapper, styles.notificationsButton]} 
          onPress={() => showAlert('Notificaciones')}>
          <Text style={styles.buttonText}>Notificaciones</Text>
        </TouchableOpacity>
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
    color: '#fff',
  },
  buttonWrapper: {
    width: 200,
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  changeThemeButton: {
    backgroundColor: '#4CAF50', // Verde
  },
  changeLanguageButton: {
    backgroundColor: '#2196F3', // Azul
  },
  notificationsButton: {
    backgroundColor: '#FF5722', // Naranja
  },
});
