import { Modal, Text, TouchableOpacity, View } from "react-native";

interface MapDetailsModalProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

export default function MapDetailsModal({
  isVisible,
  setIsVisible,
}: MapDetailsModalProps) {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent
      onRequestClose={() => setIsVisible(false)}
    >
      <View>
        <View>
          <Text>Detalhes do abrigo</Text>
          <Text>Mostrar imagem</Text>
          <TouchableOpacity onPress={() => setIsVisible(false)}>
            <Text>Tracar rota até o abrigo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
