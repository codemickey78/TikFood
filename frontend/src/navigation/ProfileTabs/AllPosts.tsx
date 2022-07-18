import { View, ScrollView, Text, FlatList } from "react-native";
import React from "react";
import { proStyles, allPostStyle } from "./styles";
import { allList } from "../../../assets/data/alldata";

const PostView = ({ item, index }: any) => {
  return <View key={index} style={allPostStyle.mainCol}></View>;
};

const AllPosts = () => {
  return (
    <View style={proStyles.mainCon}>
      <FlatList
        ItemSeparatorComponent={() => (
          <View style={{ width: 16, backgroundColor: "pink" }} />
        )}
        numColumns={3}
        key={3}
        data={allList}
        renderItem={PostView}
      />
    </View>
  );
};

export default AllPosts;
