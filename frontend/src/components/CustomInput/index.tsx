import { View, Text, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FONTS } from "../../constants";

const CustomInputIcon = ({ icon, placeholder, keyBoard, isPass, inputValue }: any) => {
  return (
    <View style={styles.authFormControl}>
      <Ionicons
        name={icon}
        size={30}
        color="#00000038"
        style={{ paddingHorizontal: 5 }}
      />
      <TextInput
        style={styles.authInput}
        placeholder={placeholder}
        keyboardType={keyBoard}
        autoCapitalize="none"
        secureTextEntry={isPass}
        onChangeText={(text) => inputValue(text)}
      />
    </View>
  );
};

export { CustomInputIcon };

const styles = StyleSheet.create({
  authFormControl: {
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    borderColor: "rgba(0, 0, 0, 0.05)",
    overflow: "hidden",
    marginBottom: 10,
    borderRadius: 5,
  },
  authInput: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontFamily: FONTS.regular,
  },
});
