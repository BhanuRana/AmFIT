import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

const CalorieMeter = props => {
  const {consumed = 0, goal = 0} = props;

  const meterReading = (consumed / goal) * 100;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.fillMeter,
          {
            width: `${meterReading}%`,
          },
        ]}
      />
      <Text style={styles.titleText}>{consumed} Calories consumed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '92%',
    height: 100,
    alignSelf: 'center',
    elevation: 3,
    borderRadius: 7,
    overflow: 'hidden',
  },
  fillMeter: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '0',
    height: '100%',
    backgroundColor: Colors.green,
  },
  titleText: {fontSize: 20, fontWeight: '600', padding: 20},
});

export default CalorieMeter;
