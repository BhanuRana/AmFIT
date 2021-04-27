import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BarChart, YAxis, Grid} from 'react-native-svg-charts';
import Colors from '../../utils/Colors';

const ConsumptionBarChart = props => {
  const {goal, data} = props;

  const maxValue = goal + 400;

  return (
    <View style={styles.container}>
      <YAxis
        min={0}
        max={maxValue}
        data={data}
        contentInset={styles.contentInset}
        svg={{
          fill: Colors.gray,
          fontSize: 10,
        }}
      />
      <BarChart
        yMin={0}
        yMax={maxValue}
        style={styles.barChart}
        data={data}
        svg={{fill: Colors.green}}
        spacingInner={0.1}
        spacingOuter={0.1}
        contentInset={styles.contentInset}>
        <Grid />
      </BarChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '92%',
    height: 450,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: 20,
    margin: 20,
    elevation: 2,
    borderRadius: 7,
    overflow: 'hidden',
  },

  barChart: {flex: 1, marginLeft: 14},

  contentInset: {top: 30, bottom: 30},
});

export default ConsumptionBarChart;
