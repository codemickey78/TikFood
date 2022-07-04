import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import {
  ForgotPassScreen,
  RegisterScreen,
  LoginScreen,
} from "./src/screens/auth";

export default function App() {
  const Stack = createStackNavigator();

  const [loaded] = useFonts({
    EuBold: require("./assets/fonts/Euclid-Circular-Bold.ttf"),
    EuMedium: require("./assets/fonts/Euclid-Circular-Medium.ttf"),
    EuRegular: require("./assets/fonts/Euclid-Circular-Regular.ttf"),
    EuLight: require("./assets/fonts/Euclid-Circular-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen component={LoginScreen} name="Login"></Stack.Screen>
          <Stack.Screen
            component={RegisterScreen}
            name="Register"
          ></Stack.Screen>
          <Stack.Screen
            component={ForgotPassScreen}
            name="ResetPassword"
          ></Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
