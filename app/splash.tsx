import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";

const { height } = Dimensions.get("window");

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(tabs)/home");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.droneContainer}>
        <Image
          source={require("../assets/images/splash-drone.png")}
          style={styles.droneImage}
          resizeMode="cover"
          accessibilityLabel="Imagem de um Drone branco com uma câmera acoplada"
          accessibilityRole="image"
        />
      </View>
      <View
        style={styles.content}
        accessibilityLabel="Área de informação sobre o aplicativo"
      >
        <Image
          source={require("../assets/images/AuraSmartLogo.png")}
          style={styles.logoImage}
          resizeMode="contain"
          accessibilityLabel="Imagem do Logo da Aura Smart"
          accessibilityRole="image"
        />

        <Text style={styles.subtitle} accessibilityLanguage="en-US">
          for smart cities
        </Text>

        <Text style={styles.description}>
          Um{" "}
          <Text style={styles.highlight}>ecossistema de proteção urbana</Text>,
          tornando as cidades mais resilientes.
        </Text>

        <ActivityIndicator
          size="large"
          color="#E53935"
          style={{ marginTop: 40 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  droneContainer: {
    height: "55%",
  },
  droneImage: {
    width: "100%",
    height: "100%",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  logoImage: {
    width: 200,
    height: 60,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#999",
    marginTop: 4,
    fontWeight: "500",
  },
  description: {
    fontSize: 17,
    color: "#444",
    textAlign: "center",
    marginTop: 30,
    lineHeight: 26,
    paddingHorizontal: 10,
  },
  highlight: {
    color: "#E53935",
    fontWeight: "bold",
  },
});
