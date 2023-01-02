import { useState, useEffect } from "react";
import { Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Quote } from "../models/quote";
import QuoteCard from "../components/QuoteCard";
import { styles } from "../styles.js";
// import GetQuote from "../components/GetQuote";
import { useSwipe } from "../hooks/useswipe";

export default function QuotePage() {
  const [quotes, setQuotes] = useState<Quote[]>([]) || undefined;
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const { onTouchStart, onTouchEnd } = useSwipe(
    onSwipeDown,
    // onSwipeUp,
    6
  );

  const getNewQuote: Function = () => {
    if (currentQuoteIndex < quotes.length - 1) {
      setCurrentQuoteIndex(currentQuoteIndex + 1);
    } else {
      setCurrentQuoteIndex(0);
    }
  };

  const getRandomQuote: Function = () => {
    let randomIndex = Math.floor(Math.random() * (quotes.length - 1));
    if (currentQuoteIndex !== randomIndex) {
      setCurrentQuoteIndex(randomIndex);
      console.log(`index: ${currentQuoteIndex}`);
    } else {
      setCurrentQuoteIndex(Math.floor(Math.random() * (quotes.length - 1)));
    }
  };

  // function onSwipeUp() {
  //   getRandomQuote();
  // }

  function onSwipeDown() {
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
            <QuoteCard quote={quotes[currentQuoteIndex]} />
          </>
        ) : null}
      </ScrollView>
    </LinearGradient>
  );
}
