import React, { useState, useEffect } from "react";
import * as Axios from "axios";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";

interface PhaseSection {
  phaseHighlight: string;
  phaseSubText: string;
  items: string[];
}

interface AboutContent {
  id: string;
  mainTitleHighlight: string;
  mainTitleNormal: string;
  sectionProposalTitle: string;
  sectionProposalDescription1: string;
  sectionProposalDescription2: string;
  sectionHowItWorksTitle: string;
  sectionsPhased: PhaseSection[];
}

export default function About() {
  const [aboutData, setAboutData] = useState<AboutContent | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        const API_URL =
          "https://683b982c28a0b0f2fdc50295.mockapi.io/fiap-aura-smart-backend/about";

        const response = await Axios.default.get<AboutContent[]>(API_URL);
        setAboutData(response.data[0]);
      } catch (error) {
        console.error("Erro ao buscar conteúdo 'Sobre':", error);
        if (error instanceof Error) {
          setErro(`Não foi possível carregar o conteúdo: ${error.message}`);
        } else {
          setErro("Não foi possível carregar o conteúdo. Erro desconhecido.");
        }
      } finally {
        setCarregando(false);
      }
    };

    fetchAboutContent();
  }, []);

  if (carregando) {
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
          <ActivityIndicator size="large" color="#F83758" />
          <Text
            style={styles.loadingErrorText}
            accessibilityLiveRegion="polite"
            accessible={true}
          >
            Carregando conteúdo...
          </Text>
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
            accessibilityLabel="Logo da Aura Smart"
            accessibilityRole="image"
          />
        </View>
        <View style={styles.loadingErrorContainer}>
          <Text style={styles.loadingErrorText}>{erro}</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!aboutData) {
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
          <Text style={styles.loadingErrorText}>Conteúdo não encontrado.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/AuraSmartLogo.png")}
            style={styles.logoImage}
            resizeMode="contain"
            accessibilityRole="header"
          />
        </View>

        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>
            Um{" "}
            <Text style={styles.highlightText}>
              {aboutData.mainTitleHighlight}
            </Text>
            {aboutData.mainTitleNormal}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {aboutData.sectionProposalTitle}
          </Text>
          <Text style={styles.description}>
            <Text style={styles.boldText}>AuraSmart</Text>{" "}
            {aboutData.sectionProposalDescription1}
          </Text>
          <Text style={styles.description}>
            {aboutData.sectionProposalDescription2}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {aboutData.sectionHowItWorksTitle}
          </Text>

          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/rota-de-fuga.png")}
              style={styles.rotaFugaImage}
              resizeMode="contain"
              accessibilityLabel="Diagrama ilustrando uma rota de fuga"
              accessibilityRole="image"
            />
          </View>
        </View>

        {aboutData.sectionsPhased.map((phase, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.phaseTitle}>
              <Text style={styles.highlightText}>{phase.phaseHighlight}:</Text>{" "}
              <Text style={styles.subText}>{phase.phaseSubText}</Text>
            </Text>
            <View style={styles.listContainer}>
              {phase.items.map((item, itemIndex) => (
                <Text key={itemIndex} style={styles.listItem}>
                  • {item}
                </Text>
              ))}
            </View>
          </View>
        ))}

        <View style={styles.finalImageContainer}>
          <Image
            source={require("../../assets/images/aura-balão.png")}
            style={styles.finalImage}
            resizeMode="contain"
            accessibilityLabel="Ilustração de um balão da AuraSmart"
            accessibilityRole="image"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
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
  titleSection: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#FFFFFF",
  },
  mainTitle: {
    fontSize: 24,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "400",
    color: "#2E2E2E",
    lineHeight: 32,
    textAlign: "center",
  },
  highlightText: {
    color: "#F83758",
    fontWeight: "700",
  },
  subText: {
    fontWeight: "700",
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: "#FFFFFF",
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "700",
    color: "#F83758",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    color: "#2E2E2E",
    lineHeight: 24,
    marginBottom: 15,
    textAlign: "justify",
  },
  boldText: {
    fontWeight: "700",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  rotaFugaImage: {
    width: "100%",
    height: 200,
  },
  phaseTitle: {
    fontSize: 18,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "400",
    color: "#2E2E2E",
    marginBottom: 15,
  },
  listContainer: {
    paddingLeft: 10,
  },
  listItem: {
    fontSize: 15,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    color: "#2E2E2E",
    lineHeight: 22,
    marginBottom: 12,
    textAlign: "justify",
  },
  finalImageContainer: {
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  finalImage: {
    width: "100%",
    height: 250,
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
