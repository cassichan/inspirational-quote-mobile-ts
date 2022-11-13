import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "../styles.js";

export default function Quotes() {
  return (
    <View>
      <TouchableOpacity style={styles.quoteButton}>
        <Text style={styles.quoteButtonText}>Today's Quote</Text>
      </TouchableOpacity>
    </View>
  );
}
