import { Text, View } from "react-native";
import { QuoteProp } from "../models/quote";
import { styles } from "../styles";

export default function QuoteCard({ quote }: QuoteProp) {
  return (
    <View style={styles.quoteContainer}>
      <Text style={styles.quoteText}>{quote?.body}</Text>
      <Text style={styles.quoteText}>-{quote?.author}</Text>
    </View>
  );
}
