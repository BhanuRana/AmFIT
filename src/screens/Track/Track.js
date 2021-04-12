import React from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import CalorieMeter from '../../components/CalorieMeter/CalorieMeter';
import FoodDiary from '../../components/FoodDiary/FoodDiary';
import WeighingScale from '../../components/WeighingScale/WeighingScale';

const Track = () => {
  let calorieGoalToday = 2500;
  let caloriesConsumedToday = 2200;

  let intake = {breakfast: [{recipe: '2 banana', calorie: 700}]};

  let weightToday = '64.20 kg';

  return (
    <ScrollView contentContainerStyle={styles.flexGrow1}>
      <CalorieMeter consumed={caloriesConsumedToday} goal={calorieGoalToday} />
      <FoodDiary intake={intake} />
      <WeighingScale weight={weightToday} />
    </ScrollView>
  );
};

export default Track;
