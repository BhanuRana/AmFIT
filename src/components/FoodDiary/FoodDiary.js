import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../utils/Colors';

const Meal = ({type, calorieCount, showMealIntakes, addMealIntake}) => {
  return (
    <View style={styles.meal}>
      <TouchableOpacity
        onPress={() => showMealIntakes(type, [])}
        style={styles.mealRow}>
        <Text style={styles.mealTitle}>{type}</Text>
        <Text style={styles.mealCalorieText}>{calorieCount} cal</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => addMealIntake(type)}>
        <MaterialIcon
          name="add-circle-outline"
          size={32}
          color={Colors.green}
        />
      </TouchableOpacity>
    </View>
  );
};

const FoodDiary = props => {
  const {
    breakfastCalorie,
    lunchCalorie,
    dinnerCalorie,
    showMealIntakes,
    addMealIntake,
  } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Food Diary</Text>
      <Meal
        type="Breakfast"
        calorieCount={breakfastCalorie}
        showMealIntakes={showMealIntakes}
        addMealIntake={addMealIntake}
      />
      <Meal
        type="Lunch"
        calorieCount={lunchCalorie}
        showMealIntakes={showMealIntakes}
        addMealIntake={addMealIntake}
      />
      <Meal
        type="Dinner"
        calorieCount={dinnerCalorie}
        showMealIntakes={showMealIntakes}
        addMealIntake={addMealIntake}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    width: '92%',
    alignSelf: 'center',
    elevation: 3,
    borderRadius: 7,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    marginHorizontal: 25,
  },

  meal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
    paddingLeft: 24,
    paddingRight: 15,
    borderTopWidth: 1,
    borderColor: '#e5e5e5',
  },
  mealRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  mealTitle: {fontSize: 20, color: Colors.black},
  mealCalorieText: {fontSize: 20, color: Colors.black, marginRight: 14},
});

export default FoodDiary;
