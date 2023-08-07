import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

interface IAddTodo {
  onSubmit: (title: string) => void;
}

export const AddTodo = ({ onSubmit }: IAddTodo) => {
  const [value, setValue] = useState('');
  const pressHandle = () => {
    if (value.trim()) {
      onSubmit(' ');
    } else {
      Alert.alert('Значение не может быть пустым');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder={'Введите значение'}
      />
      <Button title={'Добавить'} onPress={pressHandle} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  },
});
