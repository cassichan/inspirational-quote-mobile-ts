import { LinearGradient }  from "expo-linear-gradient";
import { styles } from "../styles.js";
export default function LinearGradientView() {
    return (
        <LinearGradient
        colors={["#33ccff", "#00ccff", "#ff9933"]}
        start={{ x: -1, y: -1 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      >
        </LinearGradient>
    )
}