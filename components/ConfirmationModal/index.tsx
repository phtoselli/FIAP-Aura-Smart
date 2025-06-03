import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    Modal,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface ConfirmationModalProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
  onConfirm: () => void;
  title: string;
  actionText: string;
}

export default function ConfirmationModal({
  isVisible,
  setIsVisible,
  onConfirm,
  title,
  actionText,
}: ConfirmationModalProps) {
  const handleConfirm = () => {
    setIsVisible(false);
    onConfirm();
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent
      onRequestClose={() => setIsVisible(false)}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Botão de fechar */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handleCancel}
          >
            <Ionicons name="close" size={24} color="#000000" />
          </TouchableOpacity>

          {/* Título */}
          <Text style={styles.title}>ATENÇÃO</Text>

          {/* Aviso legal */}
          <Text style={styles.warningText}>
            Comunicar <Text style={styles.boldText}>falso chamado é crime.</Text>
            {"\n"}
            <Text style={styles.boldText}>(5 anos de detenção).</Text>
          </Text>

          {/* Pergunta de confirmação */}
          <Text style={styles.questionText}>
            Tem certeza que deseja{"\n"}
            comunicar um desastre ou{"\n"}
            pedir ajuda?
          </Text>

          {/* Botões */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleCancel}
            >
              <Text style={styles.cancelButtonText}>
                Desistir / Cancelar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirm}
            >
              <Text style={styles.confirmButtonText}>
                {actionText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  modalContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    width: "100%",
    maxWidth: 350,
    position: "relative",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  closeButton: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "700",
    color: "#F83758",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 8,
  },
  warningText: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    color: "#727272",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 20,
  },
  boldText: {
    fontWeight: "700",
    color: "#000000",
  },
  questionText: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    color: "#000000",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 32,
  },
  buttonsContainer: {
    gap: 12,
  },
  cancelButton: {
    backgroundColor: "#F83758",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "600",
    color: "#FFFFFF",
  },
  confirmButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#F83758",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  confirmButtonText: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    fontWeight: "600",
    color: "#F83758",
  },
}); 