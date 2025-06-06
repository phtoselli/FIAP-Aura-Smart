import React, { useState, useEffect } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";

interface Tip {
  id: string;
  title: string;
  description: string;
}

export default function Tips() {
  const [dicas, setDicas] = useState<Tip[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const localImages: { [key: string]: any } = {
    "Totens públicos": require("../../assets/images/Totens-Publicos.png"),
    "Em caso de enchente": require("../../assets/images/enchente.png"),
    "Em caso rompimento de barragem": require("../../assets/images/rompimento-de-barragem.png"),
    "Alarmes urbanos de evacuação": require("../../assets/images/Alarme.png"),
    "Ações educativas nas escolas": require("../../assets/images/ações-educativas.png"),
  };

  useEffect(() => {
    const fetchDicas = async () => {
      try {
        const API_URL =
          "https://683b982c28a0b0f2fdc50295.mockapi.io/fiap-aura-smart-backend/tips";

        const response = await axios.get<Tip[]>(API_URL);
        setDicas(response.data);
      } catch (error) {
        console.error("Erro ao buscar dicas:", error);
        if (error instanceof Error) {
          setErro(`Não foi possível carregar as dicas: ${error.message}`);
        } else {
          setErro("Não foi possível carregar as dicas. Erro desconhecido.");
        }
      } finally {
        setCarregando(false);
      }
    };

    fetchDicas();
  }, []);

  const handleCardPress = (tipId: string) => {
    console.log(`Dica selecionada: ${tipId}`);
  };

  if (carregando) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/AuraSmartLogo.png")}
            style={styles.logoImage}
            resizeMode="contain"
            accessibilityRole="text"
            accessibilityLiveRegion="polite"
          />
        </View>
        <View style={styles.loadingErrorContainer}>
          <Text style={styles.loadingErrorText}>Carregando dicas...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (erro) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/AuraSmartLogo.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.loadingErrorContainer}>
          <Text style={styles.loadingErrorText}>{erro}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/AuraSmartLogo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {dicas.map((tip) => (
          <TouchableOpacity
            key={tip.id}
            style={styles.tipCard}
            onPress={() => handleCardPress(tip.id)}
            activeOpacity={0.7}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel={`Dica: ${tip.title}`}
            accessibilityHint="Toque para obter mais informações sobre esta dica"
          >
            <View style={styles.cardImageContainer}>
              <Image
                source={localImages[tip.title]}
                style={styles.cardImage}
                resizeMode="cover"
                accessibilityLabel={`Imagem representando ${tip.title}`}
              />
            </View>

            <View style={styles.cardContent}>
              <Text style={styles.cardTitle} accessibilityLanguage="pt-BR">
                {tip.title}
              </Text>
              <Text style={styles.cardDescription}>{tip.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  logoImage: {
    height: 40,
    width: 200,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  tipCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingVertical: 35,
    paddingHorizontal: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  cardImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 8,
    overflow: "hidden",
    marginRight: 20,
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "700",
    color: "#2E2E2E",
    marginBottom: 6,
    lineHeight: 22,
  },
  cardDescription: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "400",
    color: "#727272",
    lineHeight: 20,
  },

  loadingErrorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingErrorText: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
  },
});
