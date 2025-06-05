import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Modal, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HelpCompleted from "../../app/screens/HelpCompleted";
import LocationConfirmation from "../../app/screens/LocationConfirmation";

interface HelpModalProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
  skipInitial?: boolean;
}

type FlowStep = "initial" | "location" | "completed";

export default function HelpModal({ isVisible, setIsVisible, skipInitial = false }: HelpModalProps) {
  const [currentStep, setCurrentStep] = useState<FlowStep>("initial");

  useEffect(() => {
    if (isVisible && skipInitial) {
      setCurrentStep("location");
    } else if (isVisible && !skipInitial) {
      setCurrentStep("initial");
    }
  }, [isVisible, skipInitial]);

  const handleAdvance = () => {
    setCurrentStep("location");
  };

  const handleLocationConfirm = () => {
    setCurrentStep("completed");
  };

  const handleLocationSelectOther = () => {
    // Aqui você pode implementar a lógica para seleção de outro ponto
    // Por enquanto, vamos apenas voltar para a tela inicial
    setCurrentStep("initial");
  };

  const handleBack = () => {
    if (currentStep === "location") {
      if (skipInitial) {
        setIsVisible(false);
      } else {
        setCurrentStep("initial");
      }
    } else {
      setIsVisible(false);
    }
  };

  const handleComplete = () => {
    setCurrentStep("initial");
    setIsVisible(false);
  };

  const renderInitialContent = () => (
    <View style={styles.overlay}>
      <View style={styles.modalContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setIsVisible(false)} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="#727272" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Pedir Ajuda</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Conteúdo */}
        <View style={styles.content}>
          <Text style={styles.title}>Pedir ajuda</Text>
          <Text style={styles.description}>
            Aqui você poderá pedir ajuda para si mesmo ou para alguém próximo em
            situação de emergência.
          </Text>

          {/* Botões de Ação */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.advanceButton} onPress={handleAdvance}>
              <Text style={styles.advanceButtonText}>Avançar e pedir ajuda</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={() => setIsVisible(false)}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={currentStep === "initial"}
      onRequestClose={() => setIsVisible(false)}
    >
      {currentStep === "initial" && !skipInitial && renderInitialContent()}
      
      {currentStep === "location" && (
        <LocationConfirmation
          onConfirm={handleLocationConfirm}
          onSelectOther={handleLocationSelectOther}
          onBack={handleBack}
        />
      )}
      
      {currentStep === "completed" && (
        <HelpCompleted onComplete={handleComplete} />
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    margin: 20,
    maxWidth: 400,
    width: "90%",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  closeButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "600",
    color: "#000000",
  },
  placeholder: {
    width: 34,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "600",
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
  actionButtons: {
    gap: 15,
  },
  advanceButton: {
    backgroundColor: "#F83758",
    borderRadius: 12,
    paddingVertical: 16,
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
  advanceButtonText: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "600",
    color: "#FFFFFF",
  },
  cancelButton: {
    backgroundColor: "transparent",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    paddingVertical: 14,
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "600",
    color: "#727272",
  },
});
