import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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

const RecordButton = ({ recordVideo, isCamReady, stopVideo }: any) => {
  return (
    <TouchableOpacity onLongPress={() => recordVideo()} disabled={!isCamReady} onPressOut={() => stopVideo()}>
      <View style={styles.recordBtn}></View>
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

export { RectButton, RectButtonTrans, RecordButton };

const styles = StyleSheet.create({
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
});
