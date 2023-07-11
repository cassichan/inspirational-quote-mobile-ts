import { useState, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Quote } from "../models/quote";
import QuoteCard from "../components/QuoteCard";
// import GetQuote from "../components/GetQuote";
import { useSwipe } from "../hooks/useSwipe";
import { styles } from "../styles.js";

export default function QuotePage() {
  const [quotes, setQuotes] = useState<Quote[]>([]) || undefined;
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeUp, 6);

  const getRandomQuote: Function = () => {
    let randomIndex = Math.floor(Math.random() * (quotes.length - 1));
    if (currentQuoteIndex !== randomIndex) {
      setCurrentQuoteIndex(randomIndex);
    } else {
      setCurrentQuoteIndex(Math.floor(Math.random() * (quotes.length - 1)));
    }
  };

  function onSwipeUp() {
    getRandomQuote();
  }

  useEffect(() => {
    fetch("https://inspirational-quotes-cc.web.app/all-quotes")
      .then((res) => res.json())
      .then((data: Quote[]) => {
        setQuotes(data);
      })
      .catch(alert);
  }, []);

  return (
    <LinearGradient
      colors={["#fff", "#f5bb9a", "#5accbd"]}
      start={{ x: -1, y: -1 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <ScrollView onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {/* <GetQuote getRandomQuote={getRandomQuote} /> */}
        {quotes && quotes.length ? (
          <>
            {/* <Text style={styles.quoteInstructionsText}>
              Swipe up 🥰
            </Text> */}
            <QuoteCard quote={quotes[currentQuoteIndex]} />
          </>
        ) : null}
      </ScrollView>
    </LinearGradient>
  );
}
