import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].primary,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].icon,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            backgroundColor: Colors[colorScheme ?? "light"].tabBarBackground,
            borderTopWidth: 1,
            borderTopColor: Colors[colorScheme ?? "light"].lightGray,
            paddingTop: 5,
            paddingBottom: 5,
            height: 60,
          },
          default: {
            backgroundColor: Colors[colorScheme ?? "light"].tabBarBackground,
            borderTopWidth: 1,
            borderTopColor: Colors[colorScheme ?? "light"].lightGray,
            paddingTop: 5,
            paddingBottom: 5,
            height: 60,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarAccessibilityLabel:
            "Aba inicial, mostra o resumo e atalhos para as funcionalidades centrais do aplicativo",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
            fontWeight: "500",
          },
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Mapa",
          tabBarAccessibilityLabel: "Mapa com localização dos abrigos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location" size={24} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
            fontWeight: "500",
          },
        }}
      />
      <Tabs.Screen
        name="tips"
        options={{
          title: "Dicas",
          tabBarAccessibilityLabel: "Dicas de segurança e orientações úteis",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={24} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
            fontWeight: "500",
          },
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Sobre o App",
          tabBarAccessibilityLabel: "Informações sobre o aplicativo ",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={24} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
            fontWeight: "500",
          },
        }}
      />
    </Tabs>
  );
}
