import { Checkbox } from "expo-checkbox";
import { StyleSheet, Text, View } from "react-native";

const CheckboxItem = ({
  texto,
  marcado,
  semCheckbox,
  onPress,
}: {
  texto: string;
  marcado: boolean;
  semCheckbox: boolean;
  onPress: () => void;
}) => (
  <View style={styles.checkboxContainer}>
    {!semCheckbox && (
      <Checkbox
        style={styles.checkbox}
        value={marcado}
        onValueChange={onPress}
        color={marcado ? "green" : undefined}
      />
    )}
    <Text
      style={semCheckbox ? styles.checkboxTextSemMargem : styles.checkboxText}
    >
      {texto}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  checkbox: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
  checkboxText: {
    flex: 1,
    marginLeft: 10,
  },
  checkboxTextSemMargem: {
    flex: 1,
    paddingLeft: 40,
  },
});

export default CheckboxItem;
