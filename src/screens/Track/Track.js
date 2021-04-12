import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import CalorieMeter from '../../components/CalorieMeter/CalorieMeter';

const Track = () => {
  let caloriesConsumedToday = 2200;
  let calorieGoalToday = 2500;

  return (
    <View style={styles.flex1}>
      <CalorieMeter consumed={caloriesConsumedToday} goal={calorieGoalToday} />
    </View>
  );
};

export default Track;
