import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ITodoItem } from './ITodoItem';

interface ITodo {
  todo: ITodoItem;
  onRemove: (id: string) => void;
}

export const Todo = ({ todo, onRemove }: ITodo) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => console.log('Pressed', todo.id)}
      onLongPress={() => onRemove(todo.id)}
      // Bind method sample
      // onLongPress={onRemove.bind(null, todo.id)}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
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
