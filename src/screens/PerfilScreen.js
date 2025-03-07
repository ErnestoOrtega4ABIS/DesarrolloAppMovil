import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function PerfilScreen({ navigation }) {
  return (
    <LinearGradient colors={["#055eb1", "#8002b0", "#00ff58"]} style={styles.container}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/user-icon-design-free-png.webp')}/>
        <Text style={styles.text}>Nombre: Ernesto Ortega Adame</Text>
        <Text style={styles.text}>Edad: 19 años</Text>
        <Text style={styles.text}>Correo: ernestoortega1423@gmail.com</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    color: "#fff",
  },
});