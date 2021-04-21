import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

const IntakeInput = props => {
  const {type, placeholder, value, onChange} = props;

  return (
    <TextInput
      style={styles.input}
      keyboardType={type == 'text' ? 'default' : 'decimal-pad'}
      placeholder={placeholder}
      placeholderTextColor="#c5c5c5"
      returnKeyType="next"
      value={value}
      onChangeText={onChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 30,
    color: Colors.black,
    marginVertical: 15,
    padding: 20,
    width: '85%',
    backgroundColor: Colors.white,
    elevation: 3,
    borderRadius: 7,
  },
});

export default IntakeInput;
