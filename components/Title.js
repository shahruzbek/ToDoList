import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = () => {
  return (
    <View>
      <Text style={styles.title}>Today's tasks</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 50,
    marginBottom:20,
  },
});
