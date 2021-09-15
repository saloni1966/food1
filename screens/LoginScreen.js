import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import db from '../config'
import firebase from "firebase";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { RFValue } from "react-native-responsive-fontsize";
export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("Successfully Logged In");
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  handleSignUp = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        Alert.alert("User Added Successfully");
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  render() {
    var { email, password } = this.state;
    return (
      <View style={styles.containe}>
        
        <KeyboardAvoidingView>
          <View style={styles.upperConatainer}>
            <Image
              source={require("../assets/cashew.jpeg")}
              style={{ width: 400, height: 400 }}
            />
          </View>
          <View style={styles.middleContainer}>
            <CustomInput
              placeholder={"abc@example.com"}
              keyboardType={"email-address"}
              onChangeText={(textr) => {
                this.setState({
                  email: text,
                });
              }}
            />
            <CustomInput
              placeholder={"Enter Password"}
              secureTextEntry={true}
              onChangeText={(textr) => {
                this.setState({
                  password: text,
                });
              }}
            />
            
            <CustomButton title = {"Login"} onPress = {this.handleLogin(email,password)}/>
            <CustomButton title = {"SignUp"} onPress = {this.handleSignUp(email,password)}/>
          
          </View>
        </KeyboardAvoidingView>
      </View>
      //Image
      //customInput
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  displayText: {
    fontSize: 15,
    textDecorationLine: "underline",
  },
  scanButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    margin: 10,
    borderRadius: 15,
    height: 50,
    width: 75,
  },
  buttonText: {
    fontSize: 21,
  },
  InputView: {
    flexDirection: "row",
  },
  InputBox: {
    borderWidth: 1.5,
    width: 250,
    height: 50,
    fontSize: 20,
    marginTop: 10,
  },

  submitButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    margin: 10,
    borderRadius: 15,
  },
});
