import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "../styles.js";

export default function GetQuote({ getNewQuote }): any {
  return (
    <View>
      <TouchableOpacity style={styles.quoteButton} onPress={getNewQuote}>
        <Text style={styles.quoteButtonText}>Next Quote</Text>
      </TouchableOpacity>
    </View>
  );
}
