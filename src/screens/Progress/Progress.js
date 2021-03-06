import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import Header from '../../components/Header/Header';
import ConsumptionBarChart from '../../components/ConsumptionBarChart/ConsumptionBarChart';
import WeeklyAverage from '../../components/WeeklyAverage/WeeklyAverage';

const Progress = props => {
  const {calorieGoal, last7dayCalories, calorieAvg, weightAvg} = props;

  return (
    <ScrollView contentContainerStyle={styles.flexGrow1}>
      <Header title="Weekly Progress" />
      <Text style={{textAlign: 'center'}}>23 Apr - 29 Apr 2021</Text>
      <ConsumptionBarChart goal={calorieGoal} data={last7dayCalories} />
      <WeeklyAverage calorie={calorieAvg} weight={weightAvg} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flexGrow1: {flexGrow: 1},
});

export default Progress;
