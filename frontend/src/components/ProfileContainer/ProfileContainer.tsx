import { View, Text, Image, StyleSheet } from "react-native";
import { ProfileCounts, RectOutlineButton } from "..";
import { assets, COLORS, FONTS, SIZES } from "../../constants";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import IonIcons from "@expo/vector-icons/Ionicons";
import {
  AllPosts,
  Archives,
  Bookmarks,
  LikedPosts,
} from "../../navigation/ProfileTabs";

const ProfileTab = createMaterialTopTabNavigator();

const ProfileContainer = () => {
  return (
    <View style={styles.profCon}>
      <Image
        source={assets.profile}
        resizeMode="contain"
        style={styles.profImg}
      />
      <View style={{ marginVertical: 5, alignItems: "center" }}>
        <Text style={styles.profName}>Michael Quaynor</Text>
        <Text style={styles.profJob}>Software Developer</Text>
      </View>
      <View>
        <ProfileCounts />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: 10,
        }}
      >
        <View style={{ width: "50%" }}>
          <RectOutlineButton name="Follow" icon="link" color={false} />
        </View>
        <View style={{ width: "50%" }}>
          <RectOutlineButton name="Message Me" icon="mail" color={true} />
        </View>
      </View>
      <View style={{ width: "100%", height: "100%", marginTop: 10}}>
        <ProfileTab.Navigator
          initialRouteName="AllPosts"
          sceneContainerStyle={{backgroundColor: '#fff'}}
          screenOptions={{
            tabBarActiveTintColor: COLORS.primary,
            tabBarShowIcon: true,
            tabBarInactiveTintColor: "#999",
            tabBarShowLabel: false,
            tabBarIndicatorStyle: {
              backgroundColor: COLORS.primary,
            },
          }}
        >
          <ProfileTab.Screen 
            options={{
              tabBarIcon: ({ color }) => (
                <IonIcons name="film" color={color} size={24} />
              ),
            }}
            component={AllPosts}
            name="AllPosts"
          ></ProfileTab.Screen>
          <ProfileTab.Screen
            options={{
              tabBarIcon: ({ color }) => (
                <IonIcons name="file-tray" color={color} size={24} />
              ),
            }}
            component={Archives}
            name="Archives"
          ></ProfileTab.Screen>
          <ProfileTab.Screen
            options={{
              tabBarIcon: ({ color }) => (
                <IonIcons name="bookmarks" color={color} size={24} />
              ),
            }}
            component={Bookmarks}
            name="Bookmarks"
          ></ProfileTab.Screen>
          <ProfileTab.Screen
            options={{
              tabBarIcon: ({ color }) => (
                <IonIcons name="heart" color={color} size={24} />
              ),
            }}
            component={LikedPosts}
            name="LikedPosts"
          ></ProfileTab.Screen>
        </ProfileTab.Navigator>
      </View>
    </View>
  );
};

export default ProfileContainer;

const styles = StyleSheet.create({
  profName: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
  },
  profJob: {
    fontFamily: FONTS.regular,
    color: "#999",
  },
  profImg: {
    width: 100,
    height: 100,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#fff",
  },
  profCon: {
    width: "100%",
    padding: 10,
    alignItems: "center",
  },
});
