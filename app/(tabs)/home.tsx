import ConfirmationModal from "@/components/ConfirmationModal";
import HelpModal from "@/components/HelpModal";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = Colors["light"];

  const [isHelpModalVisible, setIsHelpModalVisible] = useState(false);
  const [isConfirmationModalVisible, setIsConfirmationModalVisible] =
    useState(false);
  const [confirmationAction, setConfirmationAction] = useState<{
    title: string;
    actionText: string;
    onConfirm: () => void;
  } | null>(null);

  const handleDesasterPress = () => {
    setConfirmationAction({
      title: "Indicar Desastre",
      actionText: "Avançar e comunicar desastre",
      onConfirm: () => {
        setIsConfirmationModalVisible(false);
        setIsHelpModalVisible(true);
      },
    });
    setIsConfirmationModalVisible(true);
  };

  const handleHelpPress = () => {
    setConfirmationAction({
      title: "Pedir Ajuda",
      actionText: "Avançar e pedir ajuda",
      onConfirm: () => {
        setIsConfirmationModalVisible(false);
        setIsHelpModalVisible(true);
      },
    });
    setIsConfirmationModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F5F5F5"
        translucent={false}
      />

      {/* Modal de Confirmação */}
      {confirmationAction && (
        <ConfirmationModal
          isVisible={isConfirmationModalVisible}
          setIsVisible={setIsConfirmationModalVisible}
          onConfirm={confirmationAction.onConfirm}
          title={confirmationAction.title}
          actionText={confirmationAction.actionText}
        />
      )}

      {isHelpModalVisible && (
        <HelpModal
          isVisible={isHelpModalVisible}
          setIsVisible={setIsHelpModalVisible}
          skipInitial={true}
        />
      )}

      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/AuraSmartLogo.png")}
            style={styles.logoImage}
            resizeMode="contain"
            accessible={true}
            accessibilityLabel="Logotipo Aura Smart"
          />
        </View>
      </View>

      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>
          Você está em: <Text style={styles.locationCity}>Mariana / MG</Text>
        </Text>
      </View>

      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>Em caso de desastre:</Text>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleDesasterPress}
          accessibilityRole="button"
          accessibilityLabel="Indicar um desastre. Desabamento, incêndio"
          accessibilityHint="Avança para indicar um desastre"
        >
          <View style={styles.actionButtonContent}>
            <View style={styles.actionButtonText}>
              <Text style={styles.actionButtonTitle}>Indicar um desastre</Text>
              <Text style={styles.actionButtonSubtitle}>
                Desabamento, incêndio
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#FFFFFF" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleHelpPress}
          accessibilityRole="button"
          accessibilityLabel="Pedir ajuda. Pra mim ou para alguém"
          accessibilityHint="Avança para pedir ajuda"
        >
          <View style={styles.actionButtonContent}>
            <View style={styles.actionButtonText}>
              <Text style={styles.actionButtonTitle}>Pedir ajuda</Text>
              <Text style={styles.actionButtonSubtitle}>
                Pra mim ou para alguém
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/map")}
          accessibilityRole="button"
          accessibilityLabel="Mapa de rotas e abrigos"
          accessibilityHint="Navega para a tela com rotas e pontos de abrigo"
        >
          <View style={styles.cardImageContainer}>
            <Image
              source={require("../../assets/images/mapa-de-rotas.jpg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Mapa de rotas e abrigos</Text>
            <Text style={styles.cardDescription}>
              Conheça as rotas em caso de urgência e os pontos de abrigo.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/tips")}
          accessibilityRole="button"
          accessibilityLabel="Dicas de sobrevivência"
          accessibilityHint="Navega para dicas sobre o que fazer em caso de desastre"
        >
          <View style={styles.cardImageContainer}>
            <Image
              source={require("../../assets/images/dicas.jpg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Dicas</Text>
            <Text style={styles.cardDescription}>
              Conheça todas as dicas de sobrevivência em caso de desastre em
              nossa cidade.
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.footerContent}>
          <Text style={styles.footerText}>Parceria oficial com a: </Text>
          <Image
            source={require("../../assets/images/logo-principal-mariana.png")}
            style={styles.prefeituraImage}
            resizeMode="contain"
            accessible={true}
            accessibilityLabel="Logotipo da Prefeitura de Mariana"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    height: 40,
    width: 200,
  },
  locationContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F83758",
    backgroundColor: "#FFFFFF",
    marginBottom: 30,
  },
  locationText: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    textAlign: "center",
    color: "#727272",
  },
  locationCity: {
    fontWeight: "600",
    color: "#F83758",
  },
  sectionTitleContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "600",
    color: "#000000",
    textAlign: "center",
  },
  actionsContainer: {
    marginBottom: 30,
  },
  actionButton: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    backgroundColor: "#F83758",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  actionButtonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionButtonText: {
    flex: 1,
  },
  actionButtonTitle: {
    fontSize: 18,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  actionButtonSubtitle: {
    fontSize: 14,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    color: "#FFFFFF",
    opacity: 0.9,
  },
  cardsContainer: {
    flex: 1,
  },
  card: {
    flexDirection: "row",
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  cardImageContainer: {
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  cardImage: {
    width: 64,
    height: 64,
    borderRadius: 12,
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "600",
    color: "#000000",
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    color: "#727272",
    lineHeight: 20,
  },
  footerContainer: {
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginTop: "auto",
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  footerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  footerText: {
    fontSize: 12,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    color: "#727272",
    textAlign: "center",
  },
  prefeituraImage: {
    height: 30,
    width: 120,
    marginLeft: 5,
  },
});
