import { Text, View } from "react-native";
import { QuoteProp } from "../models/quote";
import { styles } from "../styles";

export default function QuoteCard({ quote }: QuoteProp) {
  return (
    <View>
      <Text style={styles.swipeUpIcon}></Text>
      <Text style={styles.quoteBodyText}>{quote?.body}</Text>
      <Text style={styles.quoteAuthorText}>-{quote?.author}</Text>
    </View>
  );
}
