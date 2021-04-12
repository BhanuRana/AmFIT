import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import CalorieMeter from '../../components/CalorieMeter/CalorieMeter';
import WeighingScale from '../../components/WeighingScale/WeighingScale';

const Track = () => {
  let caloriesConsumedToday = 2200;
  let calorieGoalToday = 2500;

  let weightToday = '64.20 kg';

  return (
    <View style={styles.flex1}>
      <CalorieMeter consumed={caloriesConsumedToday} goal={calorieGoalToday} />
      <WeighingScale weight={weightToday} />
    </View>
  );
};

export default Track;
