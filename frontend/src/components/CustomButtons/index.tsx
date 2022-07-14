import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants";

const RectButton = ({ name, touchFunc }: any) => {
  return (
    <TouchableOpacity onPress={() => touchFunc()}>
      <View style={styles.btnContainer}>
        <Text
          style={{
            color: "#fff",
            fontFamily: FONTS.bold,
            fontSize: SIZES.medium,
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const RectOutlineButton = ({ name, touchFunc, icon, color }: any) => {
  return (
    <TouchableOpacity onPress={() => touchFunc()}>
      <View
        style={[
          styles.postBtn,
          {
            backgroundColor: color ? COLORS.primary : "transparent",
            borderColor: color ? COLORS.primary : "#d9d9d9",
            marginRight: color ? 0 : 5,
            marginLeft: color ? 5 : 0,
          },
        ]}
      >
        <Ionicons name={icon} size={30} color={color ? "#fff" : "#000"} />
        <Text
          style={{
            color: color ? "#fff" : "#000",
            fontFamily: FONTS.bold,
            fontSize: SIZES.medium,
            marginLeft: 10,
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const IconButton = ({ touchFunc, icon }: any) => {
  return (
    <TouchableOpacity onPress={() => touchFunc()}>
      <View style={styles.btnIconMain}>
        <Ionicons name={icon} size={30} color="#fff" />
      </View>
    </TouchableOpacity>
  );
};

const CameraControlBtn = ({ name, touchFunc, icon }: any) => {
  return (
    <TouchableOpacity onPress={() => touchFunc()}>
      <View style={styles.camControls}>
        <Ionicons name={icon} size={30} color="#fff" />
        <Text
          style={{
            color: "#fff",
            fontFamily: FONTS.medium,
            fontSize: 10,
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const RecordButton = ({ recordVideo, isCamReady, stopVideo }: any) => {
  return (
    <TouchableOpacity
      onLongPress={() => recordVideo()}
      disabled={!isCamReady}
      onPressOut={() => stopVideo()}
    >
      <View style={styles.recordBtn}></View>
    </TouchableOpacity>
  );
};

const GalleryPickerButton = ({ openGallery, media }: any) => {
  return (
    <TouchableOpacity onPress={() => openGallery()}>
      <View style={styles.galleryBtn}>
        {media[0] !== undefined ? (
          <Image style={styles.galleryImg} source={{ uri: media[0].uri }} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const RectButtonTrans = ({ name, touchFunc, type }: any) => {
  return (
    <TouchableOpacity
      onPress={() =>
        type === "register"
          ? touchFunc.navigate("Login")
          : type === "login"
          ? touchFunc.navigate("Register")
          : type === "reset"
          ? touchFunc.navigate("ResetPassword")
          : null
      }
    >
      <View style={styles.btnLight}>
        <Text
          style={{
            color: COLORS.primary,
            fontFamily: FONTS.medium,
            fontSize: SIZES.medium,
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export {
  RectButton,
  RectButtonTrans,
  RecordButton,
  GalleryPickerButton,
  CameraControlBtn,
  RectOutlineButton,
  IconButton
};

const styles = StyleSheet.create({
  btnIconMain: {
    backgroundColor: '#0303032c',
    padding: 5,
    borderRadius: 10
  },
  postBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    width: "100%",
    padding: 10,
    borderRadius: 10,
  },
  galleryImg: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  galleryBtn: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
  btnLight: {
    width: "100%",
    padding: SIZES.medium,
    alignItems: "center",
  },
  recordBtn: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: "#ee9999fc",
    backgroundColor: COLORS.primary,
    alignSelf: "center",
  },
  btnContainer: {
    width: "100%",
    backgroundColor: COLORS.primary,
    padding: SIZES.large,
    borderRadius: SIZES.font,
    alignItems: "center",
  },
  camControls: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
});
