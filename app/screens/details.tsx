import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Linking,
  ScrollView,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type RootStackParamList = {
  ShelterScreen: { shelter: string };
};

type ShelterScreenRouteProp = RouteProp<RootStackParamList, "ShelterScreen">;

export default function ShelterDetailScreen() {
  const route = useRoute<ShelterScreenRouteProp>();
  const shelter = JSON.parse(route.params?.shelter);
  const router = useRouter();

  const handleRoute = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${shelter.location.latitude},${shelter.location.longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace("/map")}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, styles.customFont]}>Detalhe</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={[styles.shelterName, styles.customFont]}>
          {shelter.name}
        </Text>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: shelter.location.latitude,
            longitude: shelter.location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={shelter.location} title={shelter.name} />
        </MapView>

        <View style={styles.infoBox}>
          <Text style={[styles.label, styles.customFont]}>Endereço</Text>
          <Text style={styles.info}>{shelter.address}</Text>
          <Text style={styles.info}>Fone: (31) 9999-9999</Text>
          <Text style={styles.availability}>
            Disponibilidade para até 400 pessoas
          </Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.alternateButton} onPress={handleRoute}>
        <Text style={styles.alternateButtonText}>Traçar rota</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "ios" ? 60 : 30,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 16,
    color: "#F83758",
    textAlign: "center",
  },
  scrollContent: {
    paddingBottom: 40,
  },
  shelterName: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 8,
    color: "#000",
  },
  map: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  infoBox: {
    marginTop: 16,
    alignItems: "center",
  },
  label: {
    marginBottom: 4,
    color: "#000",
  },
  info: {
    fontSize: 16,
    color: "#727272",
    marginBottom: 2,
    textAlign: "center",
  },
  availability: {
    fontSize: 16,
    color: "#000",
    marginTop: 8,
    textAlign: "center",
  },
  routeButton: {
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F83758",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Platform.OS === "ios" ? 30 : 20,
    marginTop: 8,
  },
  routeButtonText: {
    color: "#F83758",
    fontSize: 14,
  },

  customFont: {
    fontFamily: "Montserrat",
    fontWeight: "900",
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.32,
    textAlign: "center",
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
    fontWeight: "700",
    color: "#F83758",
  },
});
