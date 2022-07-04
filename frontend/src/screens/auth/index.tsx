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
const LoginScreen = ({ navigation }: any) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={authStyles.authContainer}>
        <LoginHeader nav="login" />
        <View style={{ marginTop: 10 }}>
          <CustomInputIcon
            icon="at-outline"
            placeholder="Email"
            keyBoard="email-address"
          />
          <CustomInputIcon
            icon="lock-closed-outline"
            placeholder="Password"
            keyBoard="default"
            isPass={true}
          />
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <RectButtonTrans
            name={`Forgot Password?`}
            touchFunc={navigation}
            type="reset"
          />
        </View>
        <RectButton name="Login" />
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
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={authStyles.authContainer}>
        <LoginHeader nav="register" />
        <View style={{ marginTop: 10 }}>
          <CustomInputIcon
            icon="person-circle-outline"
            placeholder="Full name"
            keyBoard="default"
          />
          <CustomInputIcon
            icon="at-outline"
            placeholder="Email"
            keyBoard="email-address"
          />
          <CustomInputIcon
            icon="lock-closed-outline"
            placeholder="Password"
            keyBoard="default"
            isPass={true}
          />
        </View>
        <RectButton name="Create account" />
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
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={authStyles.authContainer}>
        <LoginHeader nav="reset" />
        <View style={{ marginTop: 10 }}>
          <CustomInputIcon
            icon="at-outline"
            placeholder="Email"
            keyBoard="email-address"
          />
        </View>
        <RectButton name="Reset " />
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
