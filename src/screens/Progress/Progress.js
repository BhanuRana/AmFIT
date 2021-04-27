import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Header from '../../components/Header/Header';
import ConsumptionBarChart from '../../components/ConsumptionBarChart/ConsumptionBarChart';
import WeeklyAverage from '../../components/WeeklyAverage/WeeklyAverage';

const Progress = () => {
  const calorieGoal = 2200;
  const data = [1800, 1400, 2200, 2100, 2400, 2200, 600];

  return (
    <ScrollView contentContainerStyle={styles.flexGrow1}>
      <Header title="Weekly Progress" />
      <ConsumptionBarChart goal={calorieGoal} data={data} />
      <WeeklyAverage calorie={2400} weight={64.2} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flexGrow1: {flexGrow: 1},
});

export default Progress;
