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
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/splash-drone.png")}
        style={styles.droneImage}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Image
          source={require("../assets/images/AuraSmartLogo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>for smart cities</Text>

        <Text style={styles.description}>
          Um{" "}
          <Text style={styles.highlight}>ecossistema de proteção urbana</Text>,{" "}
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
  droneImage: {
    width: "100%",
    height: height * 0.4,
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
