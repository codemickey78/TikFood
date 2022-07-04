import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SIZES, FONTS, assets } from "../../constants";

const LoginHeader = ({ nav }: any) => {
  return (
    <View>
      <View style={styles.authConHeader}>
        <Image source={assets.logo} style={styles.achImg} />
        <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraLarge }}>
          TikFood App
        </Text>
      </View>
      <View style={styles.achTop}>
        <Text style={styles.achtHead}>
          Welcome to the great place to discover plenty of foods all around the
          world!
        </Text>
        {nav === "login" ? (
          <Text style={styles.achSubHead}>Sign in your account</Text>
        ) : nav === "register" ? (
          <Text style={styles.achSubHead}>Register an account</Text>
        ) : nav === "reset" ? (
          <Text style={styles.achSubHead}>Reset your password</Text>
        ) : null}
      </View>
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  authConHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  achImg: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  achTop: {
    marginTop: 10,
  },
  achtHead: {
    fontSize: SIZES.font,
  },
  achSubHead: {
    marginTop: 30,
    fontSize: SIZES.large,
    fontFamily: FONTS.medium,
  },
});
