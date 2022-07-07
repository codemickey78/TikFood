import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import { categoryList } from "../../../assets/data/alldata";
import { Category, RectOutlineButton } from "../../components";
import { FONTS, SIZES } from "../../constants";
import styles from "./styles";
const SavePost = (props: any) => {
  const [brief, setBrief] = useState("");
  const [category, setCategory] = useState("burger");
  const sourceData = props.route.params.source;
  const imgThumbnail = props.route.params.thumbnail;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.saveConInner}>
          <View style={styles.descCon}>
            <TextInput
              style={styles.postInput}
              multiline={true}
              numberOfLines={5}
              onChangeText={(text) => setBrief(text)}
              placeholder="Describe your post..."
            />
          </View>
          <View style={styles.postImgMain}>
            <Image
              style={styles.postImg}
              resizeMode='cover'
              source={{uri: imgThumbnail}}
            />
          </View>
        </View>
        <Text
          style={{
            paddingHorizontal: 15,
            paddingBottom: 5,
            fontFamily: FONTS.medium,
            fontSize: SIZES.medium,
          }}
        >
          Select Category
        </Text>
        <FlatList
          data={categoryList}
          horizontal
          keyExtractor={(category) => category.title}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Category
              item={item}
              active={item.title === category}
              touchFunc={() => setCategory(item.title)}
            />
          )}
        />
        <View style={styles.bottomCon}>
          <RectOutlineButton name="Cancel" icon="close" color={false} />
          <RectOutlineButton name="Post" icon="cloud-upload" color={true} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SavePost;
