import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    console.log("🚀 Splash carregada");
    const timer = setTimeout(() => {
      router.replace("/(tabs)/home");
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/splash-drone.png")}
        style={styles.droneImage}
        resizeMode="contain"
      />

      <Text style={styles.logo}>
        Aura<Text style={styles.plus}>+</Text>Smart
      </Text>

      <Text style={styles.subtitle}>for smart cities</Text>

      <Text style={styles.description}>
        Um <Text style={styles.highlight}>ecossistema de proteção urbana</Text>,
        tornando as cidades mais resilientes.
      </Text>

      <ActivityIndicator size="large" color="#000" style={{ marginTop: 30 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  droneImage: {
    width: 200,
    height: 200,
    marginBottom: 30,
    marginTop: 20,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
  plus: {
    color: "#E53935",
  },
  subtitle: {
    fontSize: 14,
    color: "#999",
    marginTop: 4,
  },
  description: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    marginTop: 30,
    lineHeight: 24,
  },
  highlight: {
    color: "#E53935",
    fontWeight: "bold",
  },
});
