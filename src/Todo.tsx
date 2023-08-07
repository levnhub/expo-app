import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ITodoItem } from './ITodoItem';

interface ITodo {
  todo: ITodoItem;
}

export const Todo = ({ todo }: ITodo) => {
  return (
    <View style={styles.todo}>
      <Text>{todo.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
});
