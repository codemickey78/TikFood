import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Camera, CameraType, CameraRecordingOptions } from "expo-camera";
import { Audio } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import * as MediaGallery from "expo-media-library";
import { useIsFocused } from "@react-navigation/core";
import { RecordButton } from "../../components";

const AddFeed = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasAudioPermission, setHasAudioPermission] = useState(false);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(false);
  const [userMedia, setUserMedia] = useState([]);
  const [videoData, setVideoData] = useState(null);
  const [cameraRef, setCameraRef] = useState();
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [cameraType, setCameraType] = useState(CameraType.front);
  const isFocused = useIsFocused();

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
      setUserMedia(getMedia);
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
        const data = await videoRecord;
        const source  = data.uri;
        setVideoData(source);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const stopVideo = async () => {
    
    if (cameraRef) {
      cameraRef.stopRecording();
      console.log(videoData);
      
    }
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
          ref={ref => setCameraRef(ref)}
          type={cameraType}
          onCameraReady={() => setIsCameraReady(true)}
        />
      ) : null}
      <View style={styles.bottomControls}>
        <View>
          <RecordButton recordVideo={recordVideo} isCamReady={isCameraReady} stopVideo={stopVideo}/>
        </View>
      </View>
    </View>
  );
};

export default AddFeed;

const styles = StyleSheet.create({
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
    // backgroundColor: "#745",
    // height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
