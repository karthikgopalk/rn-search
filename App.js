import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modelIsVisible, setModelIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  function addGoalHandler(goalInputText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goalInputText, id: Math.random().toString() },
    ]);
    closeModelHandler();
  }
  function deleteHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  function startAddGoalHandler() {
    setModelIsVisible(true);
  }
  function closeModelHandler() {
    setModelIsVisible(false);
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color={"#a065ec"}
          onPress={startAddGoalHandler}
        />
        {modelIsVisible && (
          <GoalInput
            addGoalHandler={addGoalHandler}
            isClosed={closeModelHandler}
          />
        )}
        <View style={styles.goalList}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalList: {
    flex: 4,
  },
});
