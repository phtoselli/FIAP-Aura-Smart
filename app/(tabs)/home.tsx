import DesasterModal from "@/components/DesasterModal";
import HelpModal from "@/components/HelpModal";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();

  const [isDesasterModalVisible, setIsDesasterModalVisible] = useState(false);
  const [isHelpModalVisible, setIsHelpModalVisible] = useState(false);

  return (
    <View>
      {isHelpModalVisible && (
        <HelpModal
          isVisible={isHelpModalVisible}
          setIsVisible={setIsHelpModalVisible}
        />
      )}

      {isDesasterModalVisible && (
        <DesasterModal
          isVisible={isDesasterModalVisible}
          setIsVisible={setIsDesasterModalVisible}
        />
      )}

      <Text>Bem-vindo ao Aura + Smart</Text>

      <TouchableOpacity onPress={() => setIsDesasterModalVisible(true)}>
        <Text>Indicar um desastre</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsHelpModalVisible(true)}>
        <Text>Pedir ajuda</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/Map")}>
        <Text>Mapa de rotas ou abrigos</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/Tips")}>
        <Text>Dicas</Text>
      </TouchableOpacity>
    </View>
  );
}
