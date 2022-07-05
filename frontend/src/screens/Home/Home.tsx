import { View, Text } from "react-native";
import React from "react";
import IonIcons from "@expo/vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  HomeTab,
  Profile,
  People,
  Inbox,
  AddFeed,
} from "../../navigation/BottomTabs";

const Home = () => {
  const Tab = createMaterialBottomTabNavigator();
  const { currentUser } = useSelector((store: any) => store.auth);

  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "#000" }}
      activeColor="#fff"
      inactiveColor="#999"
      initialRouteName="MainHome"
      // labeled={true}
      shifting={false}
    >
      <Tab.Screen
        options={{
          title:'Home',
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <IonIcons name="home-outline" color={color} size={24} />
          ),
        }}
        name="MainHome"
        component={HomeTab}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Friends",
          tabBarIcon: ({ color }) => (
            <IonIcons name="people-outline" color={color} size={24} />
          ),
        }}
        name="Friends"
        component={People}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Add",
          tabBarIcon: ({ color }) => (
            <IonIcons name="add-circle-outline" color={color} size={24} />
          ),
        }}
        name="Add"
        component={AddFeed}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color }) => (
            <IonIcons name="mail-outline" color={color} size={24} />
          ),
        }}
        name="Inbox"
        component={Inbox}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <IonIcons name="person-outline" color={color} size={24} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Home;
