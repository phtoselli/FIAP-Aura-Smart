import LottieView from "lottie-react-native";
import React, { useEffect, useRef } from "react";
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface HelpCompletedProps {
  onComplete: () => void;
}

export default function HelpCompleted({ onComplete }: HelpCompletedProps) {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Concluído</Text>
      </View>

      {/* Conteúdo Principal */}
      <View style={styles.contentContainer}>
        {/* Animação */}
        <View style={styles.animationContainer}>
          <LottieView
            ref={animationRef}
            source={require("../../assets/Animacao/Animation-concluido.json")}
            style={styles.animation}
            autoPlay
            loop={false}
          />
        </View>

        {/* Mensagem Principal */}
        <Text style={styles.title}>Uma equipe de resgate já foi avisada.</Text>

        {/* Mensagem Secundária */}
        <Text style={styles.subtitle}>Proteja-se até a ajuda chegar.</Text>
      </View>

      {/* Botão de Conclusão */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.completeButton} onPress={onComplete}>
          <Text style={styles.completeButtonText}>Concluir</Text>
        </TouchableOpacity>
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
    alignItems: "center",
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
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  animationContainer: {
    width: 150,
    height: 150,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "700",
    color: "#2E2E2E",
    textAlign: "center",
    lineHeight: 32,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    color: "#727272",
    textAlign: "center",
    lineHeight: 22,
  },
  actionContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  completeButton: {
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
  completeButtonText: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "600",
    color: "#FFFFFF",
  },
}); 