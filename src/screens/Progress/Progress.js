import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import ConsumptionBarChart from '../../components/ConsumptionBarChart/ConsumptionBarChart';

const Progress = () => {
  const calorieGoal = 2200;
  const data = [1800, 1400, 2200, 2100, 2400, 2200, 600];

  return (
    <ScrollView contentContainerStyle={styles.flexGrow1}>
      <View>
        <Text>Weekly Progress</Text>
      </View>

      <ConsumptionBarChart goal={calorieGoal} data={data} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flexGrow1: {flexGrow: 1},
});

export default Progress;
