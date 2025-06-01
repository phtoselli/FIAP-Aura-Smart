import { Modal, Text, TouchableOpacity, View } from "react-native";

interface DesasterModalProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

export default function DesasterModal({
  isVisible,
  setIsVisible,
}: DesasterModalProps) {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent
      onRequestClose={() => setIsVisible(false)}
    >
      <View>
        <View>
          <Text>Indicar um desastre</Text>
          <Text>
            Aqui você poderá indicar um desastre próximo em situação de
            emergência.
          </Text>
          <TouchableOpacity onPress={() => setIsVisible(false)}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
