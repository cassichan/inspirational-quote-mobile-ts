import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "../styles.js";

// export default function GetQuote({ getNewQuote }): any {
  export default function GetQuote({ getRandomQuote }): any {
  return (
    <View>
      {/* <TouchableOpacity style={styles.quoteButton} onPress={getNewQuote}> */}
      <TouchableOpacity style={styles.quoteButton} onPress={getRandomQuote}>
        <Text style={styles.quoteButtonText}>Next Quote</Text>
      </TouchableOpacity>
    </View>
  );
}
