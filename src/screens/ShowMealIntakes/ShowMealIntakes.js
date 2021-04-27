import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';

const ShowMealIntakes = props => {
  const {route, navigation, todayBreakfast, todayLunch, todayDinner} = props;

  const {docId, mealTime, mealArray} = route.params;

  const [intake, setIntake] = useState([]);

  useEffect(() => {
    navigation.setOptions({title: `${mealTime} Intake`});

    if (mealTime === 'Breakfast') setIntake(todayBreakfast);
    else if (mealTime === 'Lunch') setIntake(todayLunch);
    else if (mealTime === 'Dinner') setIntake(todayDinner);
  }, []);

  const MealDetails = ({item}) => (
    <View style={styles.mealDetails}>
      <Text style={styles.mealText}>{item.meal}</Text>
      <Text style={styles.mealText}>{item.calories} cal</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.flexGrow1}>
      {intake.map((item, index) => (
        <MealDetails key={index} item={item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flexGrow1: {flexGrow: 1},

  mealDetails: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    width: '92%',
    elevation: 1,
    backgroundColor: '#fff',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mealText: {fontSize: 22},
});

export default ShowMealIntakes;
