import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
const CustomButton = props => (
  <TouchableOpacity
    onPress={props.onPress}
    style={[styles.button, props.style]}
  >
    <Text style={[styles.buttonText, props.titleStyle]}>{props.title}</Text>
  </TouchableOpacity>
);
export default CustomButton

const styles = StyleSheet.create({
  button: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "#e01100",
  },
  buttonText: {
    fontSize: 21,
    color: "white",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
});
