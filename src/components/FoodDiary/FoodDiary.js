import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../utils/Colors';

const Meal = ({type = '', calorieCount = 0, handlePress}) => {
  return (
    <View style={styles.mealRow}>
      <Text style={styles.mealTitle}>{type}</Text>
      <View style={styles.flexRow}>
        <Text style={styles.mealCalorieText}>{calorieCount} cal</Text>
        <MaterialIcon
          onPress={() => handlePress(type)}
          name="add-circle-outline"
          size={32}
          color={Colors.green}
        />
      </View>
    </View>
  );
};

const FoodDiary = props => {
  const {intake} = props;

  const breakfastCalCount = 900;
  const lunchCalCount = 700;
  const dinnerCalCount = 600;

  const handlePress = type => {
    alert('Add:' + type);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Food Diary</Text>
      <Meal
        type="Breakfast"
        calorieCount={breakfastCalCount}
        handlePress={handlePress}
      />
      <Meal
        type="Lunch"
        calorieCount={lunchCalCount}
        handlePress={handlePress}
      />
      <Meal
        type="Dinner"
        calorieCount={dinnerCalCount}
        handlePress={handlePress}
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

  mealRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingLeft: 24,
    paddingRight: 15,
    borderTopWidth: 1,
    borderColor: '#e5e5e5',
  },
  mealTitle: {fontSize: 20, color: Colors.black},
  mealCalorieText: {fontSize: 20, color: Colors.black, marginRight: 14},
  flexRow: {flexDirection: 'row', alignItems: 'center'},
});

export default FoodDiary;
