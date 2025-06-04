import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useShelterRoute } from "../../hooks/useShelterRoute";

interface LocationConfirmationProps {
  onConfirm: () => void;
  onSelectOther: () => void;
  onBack: () => void;
}

const shelters = [
  {
    id: "1",
    name: "Abrigo Central",
    address: "Rua A, 123",
    location: { latitude: -23.561684, longitude: -46.625378 },
  },
  {
    id: "2",
    name: "Abrigo Leste",
    address: "Rua B, 456",
    location: { latitude: -23.563, longitude: -46.635 },
  },
  {
    id: "3",
    name: "Abrigo Santa Rosália",
    address:
      "Rua Capitão Bento Mascarenhas Jequitinhonha, 789 - Santa Rosália, Sorocaba - SP",
    location: { latitude: -23.493478, longitude: -47.448853 },
  },
];

export default function LocationConfirmation({
  onConfirm,
  onSelectOther,
  onBack,
}: LocationConfirmationProps) {
  const { userLocation } = useShelterRoute(shelters);

  if (!userLocation) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Carregando sua localização...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#F83758" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Localização</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Título e Descrição */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Identificamos a sua localização!</Text>
        <Text style={styles.description}>
          O desastre e/ou local de resgate fica nessa localização onde você
          está?
        </Text>

        {/* Mapa */}
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={userLocation}
              title="Você está aqui"
              pinColor="blue"
            />
          </MapView>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
            <Text style={styles.confirmButtonText}>Sim, Avançar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.alternateButton}
            onPress={onSelectOther}
          >
            <Text style={styles.alternateButtonText}>
              Não, escolher outro ponto
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "600",
    color: "#F83758",
    textAlign: "center",
  },
  placeholder: {
    width: 34,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "700",
    color: "#000000",
    textAlign: "center",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    color: "#727272",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 30,
  },
  mapContainer: {
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 30,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  map: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    color: "#727272",
  },
  actionsContainer: {
    gap: 15,
  },
  confirmButton: {
    backgroundColor: "#F83758",
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  confirmButtonText: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "600",
    color: "#FFFFFF",
  },
  alternateButton: {
    backgroundColor: "transparent",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#F83758",
    paddingVertical: 16,
    alignItems: "center",
  },
  alternateButtonText: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "600",
    color: "#F83758",
  },
});
