import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
function GoalInput(props) {
  const [goalInputText, setGoalInputText] = useState("");
  function addGoalHandler() {
    goalInputText
      ? props.addGoalHandler(goalInputText)
      : alert("input cannot be empty");
    setGoalInputText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={setGoalInputText}
          value={goalInputText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD GOAL" onPress={addGoalHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="cancel" onPress={props.isClosed} color="#f13182" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "80%",
    padding: 5,
    color: "#120438",
    borderRadius: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
