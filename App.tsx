import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';
import { ITodoItem } from './src/ITodoItem';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const addTodo = (title: string) => {
    setTodos((prev: ITodoItem[]) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View>
      <Navbar title={'Title'} />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        {/* ScrollView component not optimized for many components */}
        <FlatList
          data={todos}
          renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
