import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function About() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header com Logo */}
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/AuraSmartLogo.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        {/* Título Principal */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>
            Um <Text style={styles.highlightText}>ecossistema de proteção urbana</Text>, tornando as cidades mais resilientes.
          </Text>
        </View>

        {/* Seção: Qual a proposta? */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Qual a proposta?</Text>
          <Text style={styles.description}>
            <Text style={styles.boldText}>AuraSmart</Text> é um ecossistema de proteção urbana focado em cidades mais vulneráveis (a desastres, enchentes queimadas) para torná-las mais resilientes.
          </Text>
          <Text style={styles.description}>
            Através de parcerias com prefeituras e governos, atuamos tanto em uma jornada de prevenção de acidentes / queimadas / desabamentos quanto durante e pós calamidades, como enchentes, incêndios florestais e desabamento de barragens, etc.
          </Text>
        </View>

        {/* Seção: Como funciona */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Como funciona esse ecossistema de proteção?</Text>
          
          {/* Imagem Rota de Fuga */}
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/rota-de-fuga.png")}
              style={styles.rotaFugaImage}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Seção: Antes */}
        <View style={styles.section}>
          <Text style={styles.phaseTitle}>
            <Text style={styles.highlightText}>Antes:</Text> <Text style={styles.subText}>prevenção de acidentes</Text>
          </Text>
          <View style={styles.listContainer}>
            <Text style={styles.listItem}>
              • Sensores de monitoramento em tempo real (incêndio, cheia de rios, barragens e locais de risco).
            </Text>
            <Text style={styles.listItem}>
              • Uso de IA nos dados de imagens via satélite para tentar prever acidentes.
            </Text>
            <Text style={styles.listItem}>
              • Drones autônomos de monitoramento
            </Text>
            <Text style={styles.listItem}>
              • Infraestrutura urbana de totens, sinalização e alarmes de evacuação com mais velocidades
            </Text>
            <Text style={styles.listItem}>
              • Ações educativas de prevenção em escolas e empresas.
            </Text>
            <Text style={styles.listItem}>
              • Aplicativo de comunicação com a população
            </Text>
          </View>
        </View>

        {/* Seção: Durante */}
        <View style={styles.section}>
          <Text style={styles.phaseTitle}>
            <Text style={styles.highlightText}>Durante</Text><Text style={styles.subText}> uma calamidade</Text>
          </Text>
          <View style={styles.listContainer}>
            <Text style={styles.listItem}>
              • Alarmes urbanos de evacuação
            </Text>
            <Text style={styles.listItem}>
              • Infraestrutura a prova de água de energia focada em indicar rotas de fuga
            </Text>
            <Text style={styles.listItem}>
              • Aplicativo para a população indicar calamidades e pedir ajuda.
            </Text>
            <Text style={styles.listItem}>
              • Balões com wifi gratuito em casos de interrupção de serviço.
            </Text>
            <Text style={styles.listItem}>
              • Geolocalização de pessoas que precisam de ajuda.
            </Text>
          </View>
        </View>

        {/* Seção: Depois */}
        <View style={styles.section}>
          <Text style={styles.phaseTitle}>
            <Text style={styles.highlightText}>Depois</Text> <Text style={styles.subText}>de uma calamidade</Text>
          </Text>
          <View style={styles.listContainer}>
            <Text style={styles.listItem}>
              • Drones de busca de sobreviventes semi controlados, com câmeras termais e inteligentes.
            </Text>
            <Text style={styles.listItem}>
              • Canal de comunicação oficial dos governos para indicar rotas e abrigos
            </Text>
            <Text style={styles.listItem}>
              • Indicação de pontos de ajuda para além dos abrigos
            </Text>
          </View>
        </View>

        {/* Imagem Final */}
        <View style={styles.finalImageContainer}>
          <Image
            source={require("../../assets/images/aura-balão.png")}
            style={styles.finalImage}
            resizeMode="contain"
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
});
