import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import CalorieMeter from '../../components/CalorieMeter/CalorieMeter';
import FoodDiary from '../../components/FoodDiary/FoodDiary';
import WeighingScale from '../../components/WeighingScale/WeighingScale';

const Track = props => {
  const {navigation} = props;

  const docId = '18/04/2021';

  let calorieGoalToday = 2500;
  let caloriesConsumedToday = 2200;

  let intake = {breakfast: [{recipe: '2 banana', calorie: 700}]};

  let weightToday = '64.20';

  const navigateToShowMealIntakes = (mealTime = '', mealArray = []) => {
    navigation.navigate('ShowMealIntakes', {
      docId,
      mealTime,
      mealArray,
    });
  };

  const navigateToAddMealIntake = type => {
    navigation.navigate('AddMealIntake', {
      docId,
      type,
    });
  };

  const navigateToUpdateWeight = () => {
    navigation.navigate('UpdateWeight', {
      docId,
      weight: weightToday,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.flexGrow1}>
      <CalorieMeter consumed={caloriesConsumedToday} goal={calorieGoalToday} />
      <FoodDiary
        intake={intake}
        showMealIntakes={navigateToShowMealIntakes}
        addMealIntake={navigateToAddMealIntake}
      />
      <WeighingScale
        weight={weightToday}
        updateWeight={navigateToUpdateWeight}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flexGrow1: {flexGrow: 1},
});

export default Track;
