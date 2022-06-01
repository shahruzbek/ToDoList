import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";

const Task = (props) => {
  return (
      <View style={styles.task}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square} />
        <Text style={styles.itemText}>{props.task}</Text>
      </View>
      <View style={styles.circle}>

      </View>
    </View>
    
  );
};

export default Task;

const styles = StyleSheet.create({
  task: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    marginVertical: 5,
  },
  square: {
    backgroundColor: "#55BCF6",
    opacity: 0.5,
    width: 15,
    height: 15,
    padding: 10,
  },
  itemLeft: {
    flexDirection: "row",
    minWidth:"85%"
  },
  itemText: {
    marginHorizontal: 5,
    
  },
  circle:{
    width:12,
    height:12,
    borderRadius:6,
    borderWidth:2,
    borderColor:"#55BCF6",
    marginTop:4,
  }
});
