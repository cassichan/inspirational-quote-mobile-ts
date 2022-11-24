import * as React from "react";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { Quote } from "./models/quote";
import QuoteCard from "./components/QuoteCard";
import { styles } from "./styles.js";
import GetQuote from "./components/GetQuote";

export default function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]) || undefined;
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

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

  useEffect(() => {
    fetch("https://inspirational-quotes-cc.web.app/all-quotes")
      .then((res) => res.json())
      .then((data: Quote[]) => {
        setQuotes(data);
      })
      .catch(alert);
  }, []);

  return (
    // <View style={styles.container}>
    <LinearGradient
      colors={["#33ccff", "#00ccff", "#ff9933"]}
      start={{ x: -1, y: -1 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <Text style={styles.text}>Find Your Inspiration</Text>
      {/* <GetQuote getNewQuote={getNewQuote} /> */}
      <GetQuote getRandomQuote={getRandomQuote} />
      {quotes && quotes.length ? (
        <>
          <QuoteCard quote={quotes[currentQuoteIndex]} />
        </>
      ) : null}

      <Text style={styles.sun}>☀️</Text>
      <StatusBar style="auto" />
    </LinearGradient>
    // </View>
  );
}
