import { useEffect, useState } from "react";
import * as Location from "expo-location";

interface LocationType {
  latitude: number;
  longitude: number;
}

interface Shelter {
  id: string;
  name: string;
  address: string;
  location: LocationType;
}

export function useShelterRoute(shelters: Shelter[]) {
  const [userLocation, setUserLocation] = useState<LocationType | null>(null);
  const [nearestShelter, setNearestShelter] = useState<Shelter | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permissão de localização negada");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const currentLocation = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };

      setUserLocation(currentLocation);

      const nearest = findNearestShelter(currentLocation, shelters);
      setNearestShelter(nearest);
    })();
  }, []);

  return { userLocation, nearestShelter };
}

function getDistance(loc1: LocationType, loc2: LocationType) {
  const toRad = (value: number) => (value * Math.PI) / 180;

  const R = 6371; // km
  const dLat = toRad(loc2.latitude - loc1.latitude);
  const dLon = toRad(loc2.longitude - loc1.longitude);
  const lat1 = toRad(loc1.latitude);
  const lat2 = toRad(loc2.latitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;
  return distance;
}

function findNearestShelter(
  userLocation: LocationType,
  shelters: Shelter[]
): Shelter | null {
  if (!shelters.length) return null;

  let nearest = shelters[0];
  let minDistance = getDistance(userLocation, shelters[0].location);

  for (const shelter of shelters) {
    const distance = getDistance(userLocation, shelter.location);
    if (distance < minDistance) {
      nearest = shelter;
      minDistance = distance;
    }
  }

  return nearest;
}
