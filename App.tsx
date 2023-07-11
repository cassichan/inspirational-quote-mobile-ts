import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
// import Landing from "./components/Landing";
import QuotePage from "./screens/QuotePage";
import Login from "./screens/Login";
// import Favorites from "./screens/Favorites";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => {
            return {
              tabBarActiveTintColor: "orange",
              tabBarInactiveTintColor: "gray",
            };
          }}
        >
          {/* <Tab.Screen
            name="Home"
            component={Landing}
            options={() => {
              return { tabBarIcon: () => <Icon name="house" tvParallaxProperties={undefined} /> };
            }}
          /> */}
          <Tab.Screen
            name="Swipe up!"
            component={QuotePage}
            options={() => {
              return { tabBarIcon: () => <Icon name="book" tvParallaxProperties={undefined} /> };
            }}
          />
          {/* <Tab.Screen
            name="Favorites"
            component={Favorites}
            options={() => {
              return { tabBarIcon: () => <Icon name="star" tvParallaxProperties={undefined} /> };
            }}
          /> */}
          <Tab.Screen
            name="Login"
            component={Login}
            options={() => {
              return {
                tabBarIcon: () => (
                  <Icon name="sc-telegram" type="evilicon" tvParallaxProperties={undefined} />
                ),
              };
            }}
          />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
