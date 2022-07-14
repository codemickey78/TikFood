import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { IconButton } from "../CustomButtons";

const AppHeaders = () => {
  return (
    <View style={styles.headNav}>
      <IconButton icon="notifications" />
      <IconButton icon="ellipsis-horizontal-outline" />
    </View>
  );
};

export default AppHeaders;

const styles = StyleSheet.create({
  headNav: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: "3%",
  },
});
