import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from "react";
import {
  Camera,
  CameraType,
  CameraRecordingOptions,
  FlashMode,
} from "expo-camera";
import { Audio } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import * as MediaGallery from "expo-media-library";
import { useIsFocused } from "@react-navigation/core";
import {
  RecordButton,
  GalleryPickerButton,
  CameraControlBtn,
} from "../../components";
import { useNavigation } from "@react-navigation/native";
import * as VideoThumbnails from "expo-video-thumbnails";

const AddFeed = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasAudioPermission, setHasAudioPermission] = useState(false);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(false);
  const [userMedia, setUserMedia] = useState([]);
  const [cameraRef, setCameraRef] = useState();
  const [flash, setFlash] = useState(FlashMode.on);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [cameraType, setCameraType] = useState(CameraType.front);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const getPermissionStatus = async () => {
    const cameraStatus = await Camera.requestCameraPermissionsAsync();
    setHasCameraPermission(cameraStatus.status === "granted");
    const audioStatus = await Audio.requestPermissionsAsync();
    setHasAudioPermission(audioStatus.status === "granted");
    const galleryStatus =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    setHasGalleryPermission(galleryStatus.status === "granted");
    if (galleryStatus.granted) {
      const getMedia: any = await MediaGallery.getAssetsAsync({
        mediaType: ["video"],
        sortBy: ["creationTime"],
      });
      setUserMedia(getMedia.assets);
    }
  };

  const recordVideo = async () => {
    if (cameraRef) {
      try {
        const camOpts: CameraRecordingOptions = {
          maxDuration: 60,
          quality: Camera.Constants.VideoQuality["480"],
        };
        const videoRecord = await cameraRef.recordAsync(camOpts);
        if (videoRecord) {
          const data = await videoRecord;
          const source = data.uri;
          const videoThumbnail = await getThumbnail(source);
          navigation.navigate("SavePost", {
            source: source,
            thumbnail: videoThumbnail,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const stopVideo = async () => {
    if (cameraRef) {
      cameraRef.stopRecording();
    }
  };

  const flipCamera = () => {
    if (cameraType === "back") {
      setCameraType(CameraType.front);
    } else {
      setCameraType(CameraType.back);
    }
  };
  const toggleFlash = () => {
    console.log(flash);

    if (flash === "off") {
      setFlash(FlashMode.on);
    } else {
      setFlash(FlashMode.off);
    }
  };

  const openGallery = async () => {
    const galleryOpts: ImagePicker.ImagePickerOptions = {
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
    };
    const results = await ImagePicker.launchImageLibraryAsync(galleryOpts);

    if (!results.cancelled && results.uri !== "") {
      const videoThumbnail = await getThumbnail(results.uri);
      navigation.navigate("SavePost", {
        source: results.uri,
        thumbnail: videoThumbnail,
      });
    }
  };

  const getThumbnail = async (dataSource: any) => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(dataSource, {
        time: 1000,
      });
      return uri;
    } catch (error) {}
  };

  useEffect(() => {
    getPermissionStatus();
  }, []);

  if (!hasAudioPermission || !hasCameraPermission || !hasGalleryPermission) {
    return (
      <View>
        <Text>Hello </Text>
      </View>
    );
  }

  return (
    <View style={styles.mainCamera}>
      {isFocused ? (
        <Camera
          ratio="16:9"
          style={styles.subCamera}
          ref={(ref) => setCameraRef(ref)}
          type={cameraType}
          flashMode={flash}
          onCameraReady={() => setIsCameraReady(true)}
        />
      ) : null}

      <View style={styles.sideControls}>
        <CameraControlBtn
          name="Flip"
          icon="camera-reverse"
          touchFunc={flipCamera}
        />
        <CameraControlBtn name="Filter" icon="color-filter" />
        <CameraControlBtn name="Flash" icon="flash" touchFunc={toggleFlash} />
        <CameraControlBtn name="Timer" icon="timer" />
      </View>

      <View style={styles.bottomControls}>
        <View>
          <RecordButton
            recordVideo={recordVideo}
            isCamReady={isCameraReady}
            stopVideo={stopVideo}
          />
        </View>
        <View style={styles.galleryView}>
          <GalleryPickerButton openGallery={openGallery} media={userMedia} />
        </View>
      </View>
    </View>
  );
};

export default AddFeed;

const styles = StyleSheet.create({
  sideControls: {
    width: 50,
    paddingTop: 10,
    height: "auto",
    position: "absolute",
    right: 20,
    borderRadius: 50,
    top: 60,
    backgroundColor: "#00000033",
  },
  galleryView: {
    width: 50,
    height: 50,
    position: "absolute",
    right: 0,
    marginRight: 20,
    // flex: 1,
  },
  mainCamera: {
    flex: 1,
  },
  subCamera: {
    flex: 1,
    backgroundColor: "#000",
    aspectRatio: 9 / 16,
  },

  bottomControls: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
