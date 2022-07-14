import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { profileStyle } from "./styles";
import { assets } from "../../constants";
import { AppHeaders, ProfileContainer } from "../../components";
const Profile = () => {
  return (
    <View style={profileStyle.container}>
      <View style={profileStyle.backImg}>
        <Image
          resizeMode="cover"
          style={profileStyle.imgBack}
          source={assets.gob3}
        />
        <SafeAreaView style={profileStyle.safeArea}>
          <AppHeaders />
          <View style={profileStyle.profMain}>
            <ProfileContainer />
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Profile;
