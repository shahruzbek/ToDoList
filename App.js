import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native";
import Task from "./components/Task";
import Title from "./components/Title";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Keyboard } from "react-native";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const taskHandler = () => {
    Keyboard.dismiss;
    if (task.length < 1) {
      alert("pleas enter at least 1 characters");
    } else {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <View style={styles.container}>
      <Title />
      <ScrollView>
        {tasks.map((item, index) => {
          return <Task task={item} key={index} />;
        })}

        <KeyboardAvoidingView>
          <View style={styles.buttons}>
            <TextInput
              style={styles.input}
              value={task}
              placeholder="Write a task"
              onChangeText={(task) => {
                setTask(task);
              }}
            />
            <TouchableOpacity style={styles.plus} onPress={() => taskHandler()}>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDDDDD",
    paddingHorizontal: 20,
  },
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    bottom: 0,
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
