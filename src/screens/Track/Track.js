import React from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import CalorieMeter from '../../components/CalorieMeter/CalorieMeter';
import FoodDiary from '../../components/FoodDiary/FoodDiary';
import WeighingScale from '../../components/WeighingScale/WeighingScale';

const Track = props => {
  const {navigation} = props;

  let calorieGoalToday = 2500;
  let caloriesConsumedToday = 2200;

  let intake = {breakfast: [{recipe: '2 banana', calorie: 700}]};

  let weightToday = '64.20';

  const navigateToUpdateWeight = () => {
    navigation.navigate('UpdateWeight', {
      docId: '14/04/2021',
      weight: weightToday,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.flexGrow1}>
      <CalorieMeter consumed={caloriesConsumedToday} goal={calorieGoalToday} />
      <FoodDiary intake={intake} />
      <WeighingScale
        weight={weightToday}
        updateWeight={navigateToUpdateWeight}
      />
    </ScrollView>
  );
};

export default Track;
