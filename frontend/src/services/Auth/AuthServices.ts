// import {
//   createUserWithEmailAndPassword,
//   sendPasswordResetEmail,
//   signInWithEmailAndPassword,

// } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";

// import { fireauth, firestore } from "../../environments/config";
import * as firebase from 'firebase';

const createAccount = async (
  email: string,
  password: string,
  fullname: string
) => {

  try {
    const createAuth = await firebase.default.auth().createUserWithEmailAndPassword(email, password);
    firebase.default.firestore().collection(`users`).doc(createAuth.user?.uid).set({
      fullName: fullname,
      userId: createAuth?.user?.uid,
      email: email,
    }).then(() => {
      alert("Account Created Successful!")
    })
  } catch (error: any) {
    console.log(error?.message);
  }
  // try {
  //   const createAuth = await createUserWithEmailAndPassword(
  //     fireauth,
  //     email,
  //     password
  //   );
  //   const docRef = doc(firestore, `users/${createAuth.user.uid}`);
  //   await setDoc(docRef, {
  //     fullName: fullname,
  //     userId: createAuth.user.uid,
  //     email: email,
  //   });
  //   alert("Account Created Successful!");
  // } catch (error: any) {
  //   console.log(error?.message);
  // }
};

const signInUser = async (email: string, password: string) => {
  try {
    const signInAuth = await firebase.default.auth().signInWithEmailAndPassword(email, password);
    alert("Logged in successful!");
    alert(signInAuth?.user?.email);
  } catch (error: any) {
    console.log(error?.message);
  }

  // try {
  //   const signInAuth = await signInWithEmailAndPassword(
  //     fireauth,
  //     email,
  //     password
  //   );
  //   alert("Logged in successful!");
  //   alert(signInAuth.user.email);
  // } catch (error: any) {
  //   console.log(error?.message);
  // }
};

const resetUserPassword = async (email: string) => {
  try {
    const resetAuth = await firebase.default.auth().sendPasswordResetEmail(email);
    alert("Password Reset successful!");
  } catch (error: any) {
    console.log(error?.message);
  }
  // try {
  //   const resetAuth = await sendPasswordResetEmail(fireauth, email);
  //   alert("Password Reset successful!");
  // } catch (error: any) {
  //   console.log(error?.message);
  // }
};

export {
  createAccount,
  signInUser,
  resetUserPassword,
};
