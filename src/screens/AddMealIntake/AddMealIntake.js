import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

const AddMealIntake = props => {
  return (
    <ScrollView contentContainerStyle={styles.flexGrow1}>
      <View>
        <Text>AddMeal</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flexGrow1: {flexGrow: 1},
});

export default AddMealIntake;
