import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

const WeightInput = props => {
  const {placeholder, onSubmit} = props;

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="decimal-pad"
        maxLength={6}
        placeholder={placeholder}
        placeholderTextColor="#c5c5c5"
        style={styles.weightInput}
        onSubmitEditing={e => {
          onSubmit(e.nativeEvent.text);
        }}
      />
      <Text style={styles.unitText}>kg</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    width: '90%',
  },

  weightInput: {
    fontSize: 100,
    color: Colors.black,
    width: '90%',
    borderBottomWidth: 2,
    borderBottomColor: Colors.green,
  },

  unitText: {fontSize: 24, marginTop: 50},
});

export default WeightInput;
