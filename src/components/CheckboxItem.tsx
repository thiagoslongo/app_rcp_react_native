import { Checkbox } from "expo-checkbox";
import { StyleSheet, Text, View } from "react-native";

const CheckboxItem = ({
  texto,
  marcado,
  semCheckbox,
  onPress,
  disabled,
}: {
  texto: string;
  marcado: boolean;
  semCheckbox: boolean;
  disabled: boolean;
  onPress: () => void;
}) => (
  <View style={styles.checkboxContainer}>
    {!semCheckbox && (
      <Checkbox
        style={styles.checkbox}
        value={marcado}
        onValueChange={onPress}
        color={marcado ? "green" : undefined}
        disabled={disabled}
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
    marginTop: 10,
  },
  checkbox: {
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 4,
  },
  checkboxText: {
    flex: 1,
    marginLeft: 10,
    marginTop: 5,
  },
  checkboxTextSemMargem: {
    flex: 1,
    paddingLeft: 40,
    marginTop: 5,
  },
});

export default CheckboxItem;
