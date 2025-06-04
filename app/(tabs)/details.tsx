import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type RootStackParamList = {
  ShelterScreen: { shelter: string }; // substitua `ShelterType` pelo tipo correto
};

type ShelterScreenRouteProp = RouteProp<RootStackParamList, "ShelterScreen">;

export default function ShelterDetailScreen() {
  const route = useRoute<ShelterScreenRouteProp>();
  const shelter = JSON.parse(route.params?.shelter);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.replace("/map")}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="#F83758" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Localização</Text>
        <View style={styles.placeholder} />
      </View>

      <Text style={styles.title}>{shelter.name}</Text>

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

      <View style={styles.infoContainer}>
        <Text style={styles.subTitle}>Endereço:</Text>
        <Text style={styles.text}>{shelter.address}</Text>
        <Text style={styles.text}>Disponibilidade para até 400 pessoas</Text>
      </View>

      <TouchableOpacity
        style={styles.routeButton}
        onPress={() => {
          const url = `https://www.google.com/maps/dir/?api=1&destination=${shelter.location.latitude},${shelter.location.longitude}`;
          //   Linking.openURL(url);
        }}
      >
        <Text
          style={styles.routeButtonText}
          onPress={() => router.replace("/map")}
        >
          Traçar rota
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  backButton: {
    padding: 5,
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 8,
    color: "#333",
  },
  map: {
    height: 200,
    borderRadius: 10,
  },
  infoContainer: {
    marginTop: 16,
    padding: 8,
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    marginBottom: 4,
  },
  routeButton: {
    marginTop: 20,
    borderColor: "#FF3366",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  routeButtonText: {
    color: "#FF3366",
    fontWeight: "bold",
  },
});
