import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import {Text, View } from "react-native";
import Quotes from "./components/Quotes";
import{styles} from "./styles.js"

export default function App() {
  return (
    // <View style={styles.container}>
    <LinearGradient
      colors={["#33ccff", "#00ccff", "#ff9933"]}
      start={{ x: -1, y: -1 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <Text style={styles.text}>Find Your Inspiration</Text>
      <Quotes />
      <Text style={styles.sun}>☀️</Text>
      <StatusBar style="auto" />
    </LinearGradient>
    // </View>
  );
}
