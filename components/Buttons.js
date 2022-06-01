import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { AntDesign } from "@expo/vector-icons";

const Buttons = () => {

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.buttons}
    >
      <View style={styles.buttons}>
        <TextInput style={styles.input} value={task} placeholder="Write a task" onChangeText={(task)=>{
          setTask(task)
        }}/>
        <TouchableOpacity style={styles.plus} onPress={()=> taskHandler()}>
          <View>
            <AntDesign
              name="plus"
              size={38}
              color="grey"
              style={{
                marginHorizontal: 10,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    paddingStart: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    flex: 1,
    alignItems: "flex-end",
  },
  plus: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
});
