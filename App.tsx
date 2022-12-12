import * as React from "react";
// import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import Landing from "./components/Landing";
import QuotePage from "./screens/QuotePage";
import Login from "./screens/Login";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => {
            return {
              tabBarActiveTintColor: "magenta",
              tabBarInactiveTintColor: "gray",
            };
          }}
        >
          <Tab.Screen
            name="Home"
            component={Landing}
            options={() => {
              return { tabBarIcon: () => <Icon name="house" size="20" /> };
            }}
          />
          <Tab.Screen
            name="Quotes"
            component={QuotePage}
            options={() => {
              return { tabBarIcon: () => <Icon name="book" size="20" /> };
            }}
          />
          <Tab.Screen
            name="Favorites"
            component={QuotePage}
            options={() => {
              return { tabBarIcon: () => <Icon name="star" size="20" /> };
            }}
          />
          <Tab.Screen
            name="Login"
            component={Login}
            options={() => {
              return {
                tabBarIcon: () => (
                  <Icon name="sc-telegram" type="evilicon" size="20" />
                ),
              };
            }}
          />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
