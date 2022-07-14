import { View, Text, StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../constants";

const ProfileCounts = () => {
  return (
    <View style={styles.proCountRow}>
      <CountHolder count="30.8k" name="Followers" />
      <CountHolder count="100" name="Following" />
      <CountHolder count="5k" name="Posts" />
    </View>
  );
};

const CountHolder = ({ count, name }: any) => {
  return (
    <View style={styles.proHolder}>
      <Text style={styles.proCount}>{count}</Text>
      <Text style={styles.proLabel}>{name}</Text>
    </View>
  );
};

export default ProfileCounts;

const styles = StyleSheet.create({
  proHolder: {
    alignItems: "center",
    width: "33.33%",
    marginTop: 2,
  },

  proCountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  proCount: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
  },
  proLabel: {
    fontFamily: FONTS.regular,
    color: "#999",
  },
});
