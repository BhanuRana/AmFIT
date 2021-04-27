import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

const WeeklyAverage = props => {
  const {calorie, weight} = props;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Avg. Calorie Intake</Text>
        <Text style={styles.cardValue}>{calorie} cal</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Avg. Weight</Text>
        <Text style={styles.cardValue}>{weight} kg</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '92%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },

  card: {
    width: '47.5%',
    backgroundColor: Colors.white,
    padding: 20,
    elevation: 2,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
  },
  cardTitle: {marginTop: 6, color: Colors.black},
  cardValue: {fontSize: 32, marginVertical: 16, color: Colors.green},
});

export default WeeklyAverage;
