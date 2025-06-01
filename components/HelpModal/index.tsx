import { Modal, Text, TouchableOpacity, View } from "react-native";

interface HelpModalProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

export default function HelpModal({ isVisible, setIsVisible }: HelpModalProps) {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent
      onRequestClose={() => setIsVisible(false)}
    >
      <View>
        <View>
          <Text>Pedir ajuda</Text>
          <Text>
            Aqui você poderá pedir ajuda para si mesmo ou para alguém próximo em
            situação de emergência.
          </Text>
          <TouchableOpacity onPress={() => setIsVisible(false)}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
