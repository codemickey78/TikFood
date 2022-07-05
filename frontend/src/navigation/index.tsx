import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import {
  ForgotPassScreen,
  RegisterScreen,
  LoginScreen,
  Home,
} from "../screens/screens";
import { useDispatch } from "react-redux";
import { firestore, fireauth } from "../environments/config";
import { changeUserState } from "../redux/features/AuthSlice";

export default function Navigation() {
  const [tabTitle, setTabTitle] = useState('Home')
  const dispatch = useDispatch();
  const userAuthStateListener = () => {
    onAuthStateChanged(fireauth, (user) => {
      console.log(user?.email);
      if (user) {
        getCurrentUserData();
      }
    });
  };

  const getCurrentUserData = (): any => {
    const auth = getAuth();
    const docRef = doc(firestore, `users/${auth.currentUser?.uid}`);
    getDoc(docRef).then((userData) => {
      if (userData.exists()) {
        return dispatch(changeUserState(userData.data()));
      }
    });
  };
  useEffect(() => {
    userAuthStateListener();
  }, []);
  const { currentUser } = useSelector((store: any) => store.auth);
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {currentUser === null ? (
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
        ) : (
          <Stack.Group>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
          </Stack.Group>
        )}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
