import React from "react";
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

export default function Tips() {
  const tipCards = [
    {
      id: 1,
      title: "Totens públicos",
      description: "Conheça toda a malha de totens da cidade.",
      image: require("../../assets/images/Totens-Publicos.png"),
    },
    {
      id: 2,
      title: "Em caso de enchente",
      description: "Procedimentos em caso de enchentes",
      image: require("../../assets/images/enchente.png"),
    },
    {
      id: 3,
      title: "Em caso rompimento de barragem",
      description: "O que fazer?",
      image: require("../../assets/images/rompimento-de-barragem.png"),
    },
    {
      id: 4,
      title: "Alarmes urbanos de evacuação",
      description: "Conheça os tipos de alarmes",
      image: require("../../assets/images/Alarme.png"),
    },
    {
      id: 5,
      title: "Ações educativas nas escolas",
      description: "Veja o calendário oficial de ações",
      image: require("../../assets/images/ações-educativas.png"),
    },
  ];

  const handleCardPress = (tipId: number) => {
    // Aqui você pode implementar navegação para telas específicas de cada dica
    console.log(`Dica selecionada: ${tipId}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header com Logo */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/AuraSmartLogo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      {/* Lista de Dicas */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {tipCards.map((tip) => (
          <TouchableOpacity
            key={tip.id}
            style={styles.tipCard}
            onPress={() => handleCardPress(tip.id)}
            activeOpacity={0.7}
          >
            <View style={styles.cardImageContainer}>
              <Image
                source={tip.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
            </View>
            
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{tip.title}</Text>
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
});
