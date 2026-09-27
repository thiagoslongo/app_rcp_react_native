import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Header = ({
  titulo,
  tempo,
  ciclos,
  onPressVoltar,
}: {
  titulo: string;
  tempo: string;
  ciclos: number;
  onPressVoltar: () => void;
}) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={onPressVoltar}>
      <MaterialCommunityIcons
        name="arrow-left-circle"
        size={25}
        color={"rgba(255,255,255,0.9)"}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>{titulo}</Text>
    <Text style={styles.headerText}>{tempo}</Text>
    <Text style={styles.headerText}>Ciclos: {ciclos}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#2D2343",
    paddingTop: StatusBar.currentHeight || 80,
    paddingHorizontal: 20,
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 20,
  },
});

export default Header;
