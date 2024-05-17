import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfilePage from "../../pages/ProfilePage";
import ChatPage from "../../pages/ChatPage";
import { Image, Dimensions } from "react-native";
import ExercisePage from "../../pages/ExercisePage";
import ExerciseStack from "../ExerciseStack";
import HomePage from "../../pages/HomePage";

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#a6cf97",
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}
    > 
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/047_-_homepage-512.webp")}
              style={{
                width: Dimensions.get("window").width / 10,
                height: 20,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ExerciseStack"
        component={ExerciseStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/runninh.png")}
              style={{
                width: Dimensions.get("window").width / 20,
                height: 20,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ChatPage"
        component={ChatPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/chat_120238.png")}
              style={{
                width: Dimensions.get("window").width / 20,
                height: 20,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/user-icon-on-transparent-background-free-png.png")}
              style={{
                width: Dimensions.get("window").width / 20,
                height: 20,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;
