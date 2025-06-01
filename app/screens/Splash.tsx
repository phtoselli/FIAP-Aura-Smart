import { ActivityIndicator, Flex, WhiteSpace } from "@ant-design/react-native";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Text } from "react-native";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/Home");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    // <ImageBackground
    //   source={require("../assets/images/splash-background.jpg")} // ajuste conforme sua estrutura
    //   style={{ flex: 1, justifyContent: "center" }}
    //   resizeMode="cover"
    // >
    <Flex
      direction="column"
      justify="center"
      align="center"
      style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.6)", padding: 20 }}
    >
      <Text style={{ color: "white", fontSize: 32, fontWeight: "bold" }}>
        Aura + Smart
      </Text>

      <WhiteSpace size="lg" />

      <Text
        style={{
          color: "#ddd",
          fontSize: 16,
          textAlign: "center",
          paddingHorizontal: 10,
        }}
      >
        Um ecossistema de proteção urbana, tornando as cidades mais resilientes.
      </Text>

      <WhiteSpace size="xl" />
      <ActivityIndicator size="large" color="white" />
    </Flex>
    // </ImageBackground>
  );
}
