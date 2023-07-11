import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../styles.js";
export default function Login() {
  return (
    <LinearGradient
      colors={["#fff", "#f5bb9a", "#5accbd"]}
      start={{ x: -1, y: -1 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <Text>Login coming soon</Text>
    </LinearGradient>
  );
}
