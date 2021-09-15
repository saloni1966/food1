import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
const CustomInput = props => (
  <Input
    containerStyle={[styles.input, props.style]}
    inputContainerStyle={{ borderBottomWidth: 0, height: 55 }}
    placeholder={props.placeholder}
    placeholderTextColor={props.placeholderTextColor}
    onChangeText={props.onChangeText}
    placeholderTextColor={"#717D7E"}
    {...props}
  />
);





const styles = StyleSheet.create({
    input: {
      width: "80%",
      height: 55,
      borderWidth: 1.5,
      borderColor: "#fff",
      alignItems: "center"
    }
  });

export default CustomInput

