import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import CalorieMeter from '../../components/CalorieMeter/CalorieMeter';
import FoodDiary from '../../components/FoodDiary/FoodDiary';
import WeighingScale from '../../components/WeighingScale/WeighingScale';

const Track = props => {
  const {
    navigation,
    calorieGoal,
    breakfastCalorie,
    lunchCalorie,
    dinnerCalorie,
    weightToday,
  } = props;

  const calorieConsumedToday = breakfastCalorie + lunchCalorie + dinnerCalorie;

  const docId = '18/04/2021';

  const navigateToShowMealIntakes = (mealTime = '', mealArray = []) => {
    navigation.navigate('ShowMealIntakes', {
      docId,
      mealTime,
      mealArray,
    });
  };

  const navigateToAddMealIntake = mealTime => {
    navigation.navigate('AddMealIntake', {
      docId,
      mealTime,
    });
  };

  const navigateToUpdateWeight = () => {
    navigation.navigate('UpdateWeight', {
      docId,
      weight: weightToday + '',
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.flexGrow1}>
      <CalorieMeter consumed={calorieConsumedToday} goal={calorieGoal} />
      <FoodDiary
        breakfastCalorie={breakfastCalorie}
        lunchCalorie={lunchCalorie}
        dinnerCalorie={dinnerCalorie}
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
