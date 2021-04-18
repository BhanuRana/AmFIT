import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';

const ShowMealIntakes = props => {
  const {route, navigation} = props;

  const {docId, mealTime, mealArray} = route.params;

  useEffect(() => {
    navigation.setOptions({title: `${mealTime} Intake`});
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.flexGrow1}>
      <View>
        <Text>Show {mealTime} MealIntakes</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flexGrow1: {flexGrow: 1},
});

export default ShowMealIntakes;
