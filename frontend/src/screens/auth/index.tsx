import {
  View,
  Text,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import authStyles from "./styles";
import {
  LoginHeader,
  CustomInputIcon,
  RectButton,
  RectButtonTrans,
} from "../../components";
import { useState } from "react";
import {
  createAccount,
  resetUserPassword,
  signInUser,
} from "../../services/Auth/AuthServices";

const LoginScreen = ({ navigation }: any) => {
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const loginUser = () => {
    signInUser(authEmail, authPassword);
    setAuthEmail("");
    setAuthPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={authStyles.authContainer}>
        <LoginHeader nav="login" />
        <View style={{ marginTop: 10 }}>
          <CustomInputIcon
            icon="at-outline"
            placeholder="Email"
            keyBoard="email-address"
            inputValue={setAuthEmail}
          />
          <CustomInputIcon
            icon="lock-closed-outline"
            placeholder="Password"
            keyBoard="default"
            isPass={true}
            inputValue={setAuthPassword}
          />
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <RectButtonTrans
            name={`Forgot Password?`}
            touchFunc={navigation}
            type="reset"
          />
        </View>
        <RectButton name="Login" touchFunc={loginUser} />
        <RectButtonTrans
          name={`Dont't have an account! Register`}
          touchFunc={navigation}
          type="login"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const RegisterScreen = ({ navigation }: any) => {
  const [authEmail, setAuthEmail] = useState("");
  const [authFullName, setAuthFullName] = useState("");
  const [authPassword, setAuthPassword] = useState("");

  const registerUser = () => {
    createAccount(authEmail, authPassword, authFullName);
    setAuthEmail("");
    setAuthPassword("");
    setAuthFullName("");
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={authStyles.authContainer}>
        <LoginHeader nav="register" />
        <View style={{ marginTop: 10 }}>
          <CustomInputIcon
            icon="person-circle-outline"
            placeholder="Full name"
            keyBoard="default"
            inputValue={setAuthFullName}
          />
          <CustomInputIcon
            icon="at-outline"
            placeholder="Email"
            keyBoard="email-address"
            inputValue={setAuthEmail}
          />
          <CustomInputIcon
            icon="lock-closed-outline"
            placeholder="Password"
            keyBoard="default"
            isPass={true}
            inputValue={setAuthPassword}
          />
        </View>
        <RectButton name="Create account" touchFunc={registerUser} />
        <RectButtonTrans
          name="I have an account! Sign In"
          touchFunc={navigation}
          type="register"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const ForgotPassScreen = ({ navigation }: any) => {
  const [authEmail, setAuthEmail] = useState("");
  const resetPassword = () => {
    resetUserPassword(authEmail);
    setAuthEmail("");
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={authStyles.authContainer}>
        <LoginHeader nav="reset" />
        <View style={{ marginTop: 10 }}>
          <CustomInputIcon
            icon="at-outline"
            placeholder="Email"
            inputValue={setAuthEmail}
            keyBoard="email-address"
          />
        </View>
        <RectButton name="Reset " touchFunc={resetPassword} />
        <RectButtonTrans
          name={`I have an account! Sign In`}
          touchFunc={navigation}
          type="register"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export { RegisterScreen, LoginScreen, ForgotPassScreen };
