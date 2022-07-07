import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants";

const Category = ({ item, touchFunc, active }: any) => {
  return (
    <TouchableOpacity onPress={touchFunc}>
      <View
        style={[
          styles.cateCont,
          active
            ? { backgroundColor: COLORS.primary, borderColor: COLORS.primary }
            : { backgroundColor: "transparent" },
        ]}
      >
        <Image source={item.image} style={styles.cateImg} />
        <Text
          style={[
            styles.cateLabel,
            active ? { color: "#fff" } : { color: "#000" },
          ]}
        >
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  cateCont: {
    width: 80,
    elevation: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: "#d9d9d9",
  },
  cateLabel: {
    color: "#000",
    marginTop: 10,
    textTransform: "capitalize",
    fontFamily: FONTS.medium,
    fontSize: 12,
  },
  cateImg: {
    width: 50,
    height: 50,
  },
});
