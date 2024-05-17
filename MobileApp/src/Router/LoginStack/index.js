import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../../pages/LoginPage";
import SignUpPage from "../../pages/SignUpPage";

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}}/>
      <Stack.Screen name="SignUp" component={SignUpPage} />
    </Stack.Navigator>
  );
};

export default LoginStack;
