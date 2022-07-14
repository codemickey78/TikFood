// import { getAuth } from "firebase/auth";
// import { doc, Timestamp, updateDoc, addDoc, collection } from "firebase/firestore";
// import { ref, getDownloadURL, uploadBytes, uploadBytesResumable } from 'firebase/storage';
// import { fireauth, firestore, firestorage } from "../environments/config";
// import * as firebase from 'firebase/app';

import firebase from 'firebase';

const publishPost = async (file: any, postData: any) => {
    const userId = firebase.auth().currentUser?.uid;
    postData['createdAt'] = firebase.firestore.Timestamp.now().seconds;
    postData['owner'] = userId;
    // const docCol = collection(firestore, `posts`);
    // try {
    //     const savePost: any = await addDoc(docCol, postData);
    //     storeMedia(file, `posts/${savePost.id}`);
    // } catch (error) {
    //     console.log(error);
    // }
    try {
        firebase.firestore().collection('posts').add(postData).then((res) => {
            storeMedia(file, res.id);
        });
    } catch (error) {
        console.log(error);
    }
}

const storeMedia = async (file: any, postID: string) => {
    // const storageRef = ref(firestorage, `${postID}.mp4`);

    const fetchBlob = await fetch(file);
    const blobResults = await fetchBlob.blob();
    // const blob: any = await new Promise((resolve, reject) => {
    //     const xhr = new XMLHttpRequest();

    //     xhr.onload = function () {
    //         resolve(xhr.response);
    //     };

    //     xhr.ontimeout = function (e) {
    //         console.log(e);
    //     };
    //     xhr.onerror = function (e) {
    //         console.log(e);

    //         reject(new TypeError("Network request failed"));
    //     };
    //     xhr.responseType = "blob";
    //     xhr.open("GET", file, true);
    //     xhr.timeout = 1000 * 60;
    //     xhr.send(null);
    // });

    try {
        firebase.storage().ref().child(`posts/${postID}.mp4`).put(blobResults, { contentType: 'video/mp4' }).then((downloadUrl) => {
            downloadUrl.ref.getDownloadURL().then((url) => {
                const updateData = {
                    media: url,
                    postKey: postID
                }
                firebase.firestore().collection('posts').doc(postID).update(updateData);
            });
        })
        // uploadBytes(storageRef, blob, { contentType: 'video/mp4' })
        // const downloadUrl = await getDownloadURL(storageRef);
        // const updateData = {
        //     media: downloadUrl,
        //     postKey: postID
        // }
        // const updateRef = doc(firestore, `posts/${postID}`);
        // updateDoc(updateRef, updateData);
    } catch (error) {
        console.log(error);
    }

}
export { publishPost }